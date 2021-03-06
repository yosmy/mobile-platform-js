import * as Linking from 'expo-linking';

const linking = {
    mail: (email, subject = null) => {
        let url = `mailto:${email}`;

        if (subject) {
            url = `${url}?subject=${subject}`;
        }

        return Linking.openURL(url);
    },
    url: (url) => {
        return Linking.openURL(url);
    }
};

export default linking;