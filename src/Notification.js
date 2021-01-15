import * as Notifications from 'expo-notifications';

const notification = {
    getExpoToken: () => {
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
    prepare: () => {
        return new Promise((resolve, reject) => {
            Notifications.getPermissionsAsync()
                .then((settings) => {
                    if (
                        settings.granted
                        || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
                    ) {
                        resolve();

                        return;
                    }

                    Notifications.requestPermissionsAsync({
                        ios: {
                            allowAlert: true,
                            allowBadge: true,
                            allowSound: true,
                        },
                    })
                        .then(resolve)
                        .catch(reject)
                })
                .catch(reject)
        })
    },
    createGroup: (id, name) => {
        if (Platform.OS !== 'android') {
            return new Promise((resolve) => {
                resolve();
            });
        }

        return Notifications.setNotificationChannelAsync(
            id,
            {
                name: name,
                sound: "default",
                vibrationPattern: [0, 250, 250, 250],
            }
        );
    },
    listen: (listener) => {
        return Notifications.addNotificationReceivedListener(listener);
    },
};

export default notification;