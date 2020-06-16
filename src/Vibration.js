import {Vibration} from "react-native";

const vibration = {
    start: (pattern, repeat) => {
        Vibration.vibrate(pattern, repeat);
    }
}

export default vibration;