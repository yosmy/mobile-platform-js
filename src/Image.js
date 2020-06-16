import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from 'expo-image-manipulator';
import permission from "./Permission";

const image = {
    pick: () => {
        const pick = () => {
            return new Promise((resolve, reject) => {
                ImagePicker.launchImageLibraryAsync({
                    mediaTypes: 'Images',
                    allowsEditing: true,
                    // aspect: [1, 1],
                    base64: true
                })
                    .then(({uri, base64, width, height, cancelled}) => {
                        if (cancelled === true) {
                            resolve({
                                uri: null,
                                base64: null,
                                width: null,
                                height: null
                            });

                            return;
                        }

                        resolve({
                            uri: uri,
                            base64: `data:image/jpeg;base64,${base64}`,
                            width: width,
                            height: height,
                        });
                    })
                    .catch(reject)
            });
        };

        return new Promise((resolve, reject) => {
            permission.get(permission.CAMERA_ROLL)
                .then(({status}) => {
                    // No permission?
                    if (status !== 'granted') {
                        // Need to ask for permissions
                        permission.ask(permission.CAMERA_ROLL)
                            .then(({status}) => {
                                // User denied permissions
                                if (status !== 'granted') {
                                    reject();

                                    return;
                                }

                                pick()
                                    .then((image) => {
                                        resolve(image);
                                    })
                                    .catch(reject)
                            });

                        return;
                    }

                    pick()
                        .then((image) => {
                            resolve(image);
                        })
                        .catch(reject)
                })
                .catch(reject)
        })
    },
    take: () => {
        const take = () => {
            return new Promise((resolve, reject) => {
                ImagePicker.launchCameraAsync({
                    allowsEditing: true,
                    // aspect: [1, 1],
                    base64: true
                })
                    .then(({uri, base64, width, height, cancelled}) => {
                        if (cancelled === true) {
                            resolve({
                                uri: null,
                                base64: uri,
                                width: null,
                                height: null
                            });

                            return;
                        }

                        resolve({
                            uri: uri,
                            base64: `data:image/jpeg;base64,${base64}`,
                            width: width,
                            height: height,
                        });
                    })
                    .catch(reject)
            });
        };

        return new Promise((resolve, reject) => {
            permission.get(permission.CAMERA, permission.CAMERA_ROLL)
                .then(({status}) => {
                    // No permission?
                    if (status !== 'granted') {
                        // Need to ask for permissions
                        permission.ask(permission.CAMERA, permission.CAMERA_ROLL)
                            .then(({status}) => {
                                // User denied permissions
                                if (status !== 'granted') {
                                    reject();

                                    return;
                                }

                                take()
                                    .then(resolve)
                                    .catch(reject)
                            });

                        return;
                    }

                    take()
                        .then(resolve)
                        .catch(reject)
                })
                .catch(reject)
        })
    },
    resize: (uri, width, height, compress) => {
        return new Promise((resolve, reject) => {
            ImageManipulator.manipulateAsync(
                uri,
                [
                    {
                        resize: {
                            width: width,
                            height: height
                        }
                    }
                ],
                {
                    compress: compress,
                    base64: true
                }
            )
                .then(({uri, base64}) => {
                    resolve({
                        uri: uri,
                        base64: `data:image/jpeg;base64,${base64}`
                    });
                })
                .catch(reject)
        });
    },
};

export default image;