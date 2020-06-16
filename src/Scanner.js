import React from "react";
import {StyleSheet} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import QRCode from 'react-native-qrcode-svg';

const scanner = {
    scan: () => {
        return new Promise((resolve, reject) => {
            BarCodeScanner.requestPermissionsAsync()
                .then(({status}) => {
                    if (status !== 'granted') {
                        reject();
                    }

                    resolve(
                        ({size, border, onScan, ...props}) => {
                            let style = StyleSheet.absoluteFillObject;

                            if (size) {
                                style = {
                                    ...style,
                                    width: size,
                                    height: size
                                };
                            }

                            if (border) {
                                style = {
                                    ...style,
                                    borderRadius: 8,
                                    overflow: 'hidden'
                                };
                            }

                            return <BarCodeScanner
                                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                                onBarCodeScanned={({data}) => {
                                    try {
                                        data = JSON.parse(data);
                                    } catch(e) {
                                        // Can't parse data, ignore and return as it
                                    }

                                    onScan(
                                        data
                                    );
                                }}
                                style={style}
                                {...props}
                            />
                        }
                    );
                })
                .catch(reject)
        });
    },
    code: () => {
        return new Promise((resolve) => {
            resolve(
                ({size, value}) => {
                    return <QRCode
                        value={JSON.stringify(value)}
                        size={size}
                    />;
                }
            );
        });
    }
};

export default scanner;