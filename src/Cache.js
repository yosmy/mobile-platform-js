import * as FileSystem from 'expo-file-system';
import sha1 from 'crypto-js/sha1';

const dir = `${FileSystem.cacheDirectory}cache`;

const uri = (key) => {
    return `${cache}/${sha1(key)}`;
};

let memory;

const cache = {
    init: () => {
        memory = {
            table: [],
            data: []
        };

        return FileSystem.makeDirectoryAsync(dir)
    },
    set: (key, value) => {
        let found = memory.table.indexOf(key) !== -1;

        if (found) {
            memory.data = memory.data.map((item) => {
                if (item.key === key) {
                    // New item with new value
                    return {
                        key: item.key,
                        value: value
                    };
                }

                // Same item
                return item
            });
        } else {
            memory.table = memory.table.concat(key);

            memory.data = memory.data.concat({
                key: key,
                value: value
            });
        }

        value = JSON.stringify(value);

        return FileSystem.writeAsStringAsync(
            uri(key),
            value
        )
    },
    get: (key) => {
        let found = memory.table.indexOf(key) !== -1;

        if (found) {
            return new Promise((resolve) => {
                const {value} = memory.data.find((item) => {
                    return item.key === key;
                });

                resolve(value);
            });
        }

        return new Promise((resolve) => {
            FileSystem.readAsStringAsync(
                uri(key)
            )
                .then((value) => {
                    value = JSON.parse(value);

                    memory.table.push(key);

                    memory.data.push({
                        key: key,
                        value: value
                    });

                    resolve(value);
                })
                .catch(() => {
                    resolve(undefined);
                })
        })
    },
    delete: (key) => {
        memory = {
            table: memory.table.filter((item) => {
                return item !== key;
            }),
            data: memory.data.filter((item) => {
                return item.key !== key;
            })
        };

        return new Promise((resolve, reject) => {
            FileSystem.deleteAsync(
                uri(key)
            )
                .then(resolve)
                .catch((e) => {
                    console.log('Error deleting cache with key: ', key);

                    reject(e);
                })
        });
    },
    purge: () => {
        memory = null;

        return FileSystem.deleteAsync(dir)
    },
    count: () => {
        return memory.table.length;

        // return new Promise((resolve, reject) => {
        //     return FileSystem.readDirectoryAsync(dir)
        //         .then((files) => {
        //             resolve(files.length);
        //         })
        //         .catch(reject)
        // });
    },
}

export default cache;