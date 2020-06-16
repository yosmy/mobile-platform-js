import {Platform} from "react-native";

const select = (options) => {
    if (options.mobile) {
        // let {mobile, ...options} = options;

        options = {
            ...options,
            android: options.mobile,
            ios: options.mobile,
        };
    }

    return Platform.select(options);
};

export default select;