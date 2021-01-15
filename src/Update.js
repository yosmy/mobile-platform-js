import * as Updates from "expo-updates";

const update = (ask) => {
    return new Promise((resolve, reject) => {
        // Check if there is an update
        Updates.checkForUpdateAsync()
            .then(({isAvailable}) => {
                if (!isAvailable) {
                    resolve();

                    return;
                }

                // Just download the new version to the cache
                Updates.fetchUpdateAsync()
                    .then(() => {
                        ask()
                            .then((force) => {
                                if (!force) {
                                    resolve();

                                    return;
                                }

                                Updates.reloadAsync()
                                    .then(() => {
                                        resolve();
                                    })
                                    .catch(reject)
                            })
                            .catch(reject)
                    })
                    .catch(reject)
            })
            .catch(reject)
    });
}

export default update;