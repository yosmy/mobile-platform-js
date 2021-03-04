import {Dimensions} from "react-native";

const dimension = {
    /* https://ricostacruz.com/til/css-media-query-breakpoints */

    is0Up: () => {
        return true;
    },
    is4Up: () => {
        return Dimensions.get('window').width >= 480;
    },
    is7Up: () => {
        return Dimensions.get('window').width >= 768;
    },
    is9Up: () => {
        return Dimensions.get('window').width >= 992;
    },
    is12Up: () => {
        return Dimensions.get('window').width >= 1200;
    },
    is4Down: () => {
        return Dimensions.get('window').width < 480;
    },
    is7Down: () => {
        return Dimensions.get('window').width < 768;
    },
    is9Down: () => {
        return Dimensions.get('window').width < 992;
    },
    is12Down: () => {
        return true;
    },
    get: (dim) => {
        return Dimensions.get(dim);
    },
    withWidth: () => Component => {
        return (props) => {
            return <Component
                width={Dimensions.get('window').width}
                {...props}
            />;
        };
    }
};

export default dimension;