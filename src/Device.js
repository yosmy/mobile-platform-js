import Constants from 'expo-constants';
import * as Device from 'expo-device';

const device = {
    expo: Constants.appOwnership === 'expo',
    // installation: Constants.installationId,
    experience: Constants.manifest.id,
    package: () => {
        return Platform.OS === 'android'
            ? Constants.manifest.android.package
            : Constants.manifest.ios.bundleIdentifier;
    },
    raw: () => {
        return new Promise((resolve) => {
            Promise.all([
                new Promise((resolve) => {
                    resolve(Device.isDevice);
                }),
                new Promise((resolve) => {
                    resolve(Device.brand);
                }),
                new Promise((resolve) => {
                    resolve(Device.manufacturer);
                }),
                new Promise((resolve) => {
                    resolve(Device.modelName);
                }),
                new Promise((resolve) => {
                    resolve(Device.modelId);
                }),
                new Promise((resolve) => {
                    resolve(Device.designName);
                }),
                new Promise((resolve) => {
                    resolve(Device.productName);
                }),
                new Promise((resolve) => {
                    resolve(Device.deviceYearClass);
                }),
                new Promise((resolve) => {
                    resolve(Device.totalMemory);
                }),
                new Promise((resolve) => {
                    resolve(Device.supportedCpuArchitectures);
                }),
                new Promise((resolve) => {
                    resolve(Device.osName);
                }),
                new Promise((resolve) => {
                    resolve(Device.osVersion);
                }),
                new Promise((resolve) => {
                    resolve(Device.osBuildId);
                }),
                new Promise((resolve) => {
                    resolve(Device.osInternalBuildId);
                }),
                new Promise((resolve) => {
                    resolve(Device.osBuildFingerprint);
                }),
                new Promise((resolve) => {
                    resolve(Device.platformApiLevel);
                }),
                new Promise((resolve) => {
                    resolve(Device.deviceName);
                }),
                new Promise((resolve) => {
                    Device.getDeviceTypeAsync()
                        .then(resolve)
                        .catch(() => {
                            resolve(null);
                        })
                }),
                new Promise((resolve) => {
                    Device.getUptimeAsync()
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

                    Device.getMaxMemoryAsync()
                        .then(resolve)
                        .catch(() => {
                            resolve(null);
                        })
                }),
                new Promise((resolve) => {
                    Device.isRootedExperimentalAsync()
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

                    Device.isSideLoadingEnabledAsync()
                        .then(resolve)
                        .catch(() => {
                            resolve(null);
                        })
                }),
                new Promise((resolve) => {
                    // resolve(Constants.installationId);
                }),
            ])
                .then((result) => {
                    resolve({
                        isDevice: result[0],
                        brand: result[1],
                        manufacturer: result[2],
                        modelName: result[3],
                        modelId: result[4],
                        designName: result[5],
                        productName: result[6],
                        deviceYearClass: result[7],
                        totalMemory: result[8],
                        supportedCpuArchitectures: result[9],
                        osName: result[10],
                        osVersion: result[11],
                        osBuildId: result[12],
                        osInternalBuildId: result[13],
                        osBuildFingerprint: result[14],
                        platformApiLevel: result[15],
                        deviceName: result[16],
                        deviceType: result[17],
                        uptime: result[18],
                        maxMemory: result[19],
                        isRooted: result[20],
                        isSideLoadingEnabled: result[21],
                        // installationId: result[22],
                    });
                });
        });
    }
};

export default device;