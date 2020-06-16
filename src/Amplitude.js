import * as Amplitude from 'expo-analytics-amplitude';

const amplitude = {
    init: (api, debug) => {
        if (debug) {
            return;
        }

        Amplitude.initialize(api)
    },
    identify: (user, debug) => {
        if (debug) {
            return;
        }

        Amplitude.setUserId(user)
    },
    log: (name, properties, debug) => {
        if (debug) {
            return;
        }

        Amplitude.logEventWithProperties(name, properties)
    }
};

export default amplitude;