import * as Cellular from 'expo-cellular';

const cellular = {
    raw: () => {
        return new Promise((resolve) => {
            Promise.all([
                new Promise((resolve) => {
                    resolve(Cellular.allowsVoip);
                }),
                new Promise((resolve) => {
                    resolve(Cellular.carrier);
                }),
                new Promise((resolve) => {
                    resolve(Cellular.isoCountryCode);
                }),
                new Promise((resolve) => {
                    resolve(Cellular.mobileCountryCode);
                }),
                new Promise((resolve) => {
                    resolve(Cellular.mobileNetworkCode);
                }),
                new Promise((resolve) => {
                    Cellular.getCellularGenerationAsync()
                        .then(resolve)
                        .catch(() => {
                            resolve(null);
                        })
                })
            ])
                .then((result) => {
                    resolve({
                        allowsVoip: result[0],
                        carrier: result[1],
                        isoCountryCode: result[2],
                        mobileCountryCode: result[3],
                        mobileNetworkCode: result[4],
                        cellularGeneration: result[5],
                    });
                });
        });
    }
};

export default cellular;