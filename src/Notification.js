import {Notifications} from 'expo';

const notification = {
    getToken: () => {
        return Notifications.getExpoPushTokenAsync();
    },
    getRawToken: (config) => {
        return new Promise((resolve, reject) => {
            Notifications.getDevicePushTokenAsync(config)
                .then(({data}) => {
                    resolve(data);
                })
                .catch(reject);
        });
    },
    createGroup: (id, options) => {
        if (Platform.OS !== 'android') {
            return new Promise((resolve) => {
                resolve();
            });
        }

        return Notifications.createChannelAndroidAsync(id, options);
    },
    listen: (listener) => {
        return Notifications.addListener(listener);
    },
    clear: () => {
        return Notifications.setBadgeNumberAsync(0);
    }
};

export default notification;