import * as SecureStore from 'expo-secure-store';

const secure = {
    set: (key, value) => {
        value = JSON.stringify(value);

        return SecureStore.setItemAsync(
            key,
            value
        );
    },
    get: async (key) => {
        try {
            const value = await SecureStore.getItemAsync(key);

            if (value === null) {
                return undefined;
            }

            return JSON.parse(value);
        } catch (e) {
            await SecureStore.deleteItemAsync(key);

            throw e;
        }
    },
    delete: (key) => {
        return SecureStore.deleteItemAsync(key);
    }
};

export default secure;