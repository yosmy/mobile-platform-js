import {AsyncStorage} from "react-native";

const store = {
    set: (key, value) => {
        value = JSON.stringify(value);

        return AsyncStorage.setItem(key, value);
    },
    get: (key) => {
        return new Promise((resolve) => {
            AsyncStorage.getItem(key)
                .then((value) => {
                    if (value === null) {
                        resolve(undefined);

                        return;
                    }

                    value = JSON.parse(value);

                    resolve(value);
                })
        })
    },
    delete: (key) => {
        return AsyncStorage.removeItem(key);
    },
    clear: () => {
        return AsyncStorage.clear();
    }
};

export default store;