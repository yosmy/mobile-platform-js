import {Vibration} from "react-native";

const vibration = {
    start: (value) => {
        Vibration.vibrate(value);
    }
}

export default vibration;