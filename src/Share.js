import {Share} from "react-native";

const share = (title, message, url) => {
    return new Promise((resolve, reject) => {
        Share.share(
            {
                title: title,
                message: message,
                url: url
            },
            {
                subject: title,
                dialogTitle: title,
            }
        )
            .then(() => {
                resolve();
            })
            .catch(reject)
    });
};

export default share;