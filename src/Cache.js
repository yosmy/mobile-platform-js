import * as FileSystem from 'expo-file-system';
import sha1 from 'crypto-js/sha1';

const dir = `${FileSystem.cacheDirectory}cache`;

const uri = (key, dir) => {
    return `${dir}/${sha1(key)}`;
};

const cache = {
    init: async () => {
        try {
            await FileSystem.makeDirectoryAsync(dir);
        } catch (e) {
        }
    },
    set: async (key, value) => {
        value = JSON.stringify(value);

        await FileSystem.writeAsStringAsync(
            uri(key, dir),
            value
        );
    },
    get: async (key) => {
        try {
            let value = await FileSystem.readAsStringAsync(
                uri(key, dir)
            );

            value = JSON.parse(value);

            return value;
        } catch (e) {
            return undefined;
        }
    },
    delete: async (key) => {
        try {
            await FileSystem.deleteAsync(
                uri(key, dir)
            );
        } catch (e) {
        }
    },
    purge: async () => {
        await FileSystem.deleteAsync(dir);
    },
    count: async () => {
        const files = await FileSystem.readDirectoryAsync(dir);

        return files.length;
    }
}

export default cache;