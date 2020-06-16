import * as Application from 'expo-application';
import Constants from "expo-constants";

const application = {
    revision: Constants.manifest.revisionId,
    raw: () => {
        return new Promise((resolve) => {
            Promise.all([
                new Promise((resolve) => {
                    resolve(Application.applicationName);
                }),
                new Promise((resolve) => {
                    resolve(Application.applicationId);
                }),
                new Promise((resolve) => {
                    resolve(Application.nativeApplicationVersion);
                }),
                new Promise((resolve) => {
                    resolve(Application.nativeBuildVersion);
                }),
                new Promise((resolve) => {
                    resolve(Application.androidId);
                }),
                new Promise((resolve) => {
                    if (Platform.OS !== 'ios') {
                        resolve(null);

                        return;
                    }

                    Application.getIosIdForVendorAsync()
                        .then(resolve)
                        .catch(() => {
                            resolve(null);
                        })
                }),
                new Promise((resolve) => {
                    if (Platform.OS !== 'android') {
                        resolve(null);

                        return;
                    }

                    Application.getInstallReferrerAsync()
                        .then(resolve)
                        .catch(() => {
                            resolve(null);
                        })
                })
            ])
                .then((result) => {
                    resolve({
                        applicationName: result[0],
                        applicationId: result[1],
                        nativeApplicationVersion: result[2],
                        nativeBuildVersion: result[3],
                        androidId: result[4],
                        iosIdForVendor: result[5],
                        installReferrer: result[6],
                    });
                });
        });
    }
};

export default application;