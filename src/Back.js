import PropTypes from "prop-types";
import {BackHandler} from "react-native";

const back = {
    add: (func) => {
        BackHandler.addEventListener('hardwareBackPress', func);
    },
    remove: (func) => {
        BackHandler.removeEventListener('hardwareBackPress', func);
    }
};

const Props = PropTypes.shape({
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
});

export {
    back,
    Props
};