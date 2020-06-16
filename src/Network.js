import * as Network from 'expo-network';

const network = {
    raw: () => {
        return new Promise((resolve) => {
            Promise.all([
                new Promise((resolve) => {
                    Network.getIpAddressAsync()
                        .then(resolve)
                        .catch(() => {
                            resolve(null);
                        })
                }),
            ])
                .then((result) => {
                    resolve({
                        ipAddress: result[0],
                    });
                })
        });
    }
};

export default network;