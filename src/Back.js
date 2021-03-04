import {BackHandler} from "react-native";

const back = {
    add: (func) => {
        BackHandler.addEventListener('hardwareBackPress', func);
    },
    remove: (func) => {
        BackHandler.removeEventListener('hardwareBackPress', func);
    }
};

export default back;