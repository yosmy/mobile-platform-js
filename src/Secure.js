import * as SecureStore from 'expo-secure-store';

const secure = {
    set: (key, value) => {
        value = JSON.stringify(value);

        return SecureStore.setItemAsync(
            key,
            value
        );
    },
    get: (key) => {
        return new Promise((resolve, reject) => {
            SecureStore.getItemAsync(key)
                .then((value) => {
                    if (value === null) {
                        resolve(undefined);

                        return;
                    }

                    value = JSON.parse(value);

                    resolve(value);
                })
                .catch((e) => {
                    SecureStore.deleteItemAsync(key);

                    reject(e);
                });
        })
    },
    delete: (key) => {
        return SecureStore.deleteItemAsync(key);
    }
};

export default secure;