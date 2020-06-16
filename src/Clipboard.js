import {Clipboard} from "react-native";

const clipboard = {
    set: (value) => {
        Clipboard.setString(value)
    }
};

export default clipboard;