import * as Contacts from 'expo-contacts';

const contact = {
    all: (criteria = null) => {
        if (!criteria) {
            criteria = {
                fields: [
                    // https://github.com/expo/expo/blob/master/apps/native-component-list/src/screens/Contacts/ContactUtils.ts#L29
                    Contacts.Fields.Emails,
                    Contacts.Fields.PhoneNumbers
                ],
            };
        }

        return new Promise((resolve, reject) => {
            Contacts.getContactsAsync(criteria)
                .then(({data}) => {
                    resolve(data);
                })
                .catch(reject)
        });
    },
    // https://github.com/expo/expo/blob/master/apps/native-component-list/src/screens/Contacts/ContactUtils.ts#L29
    ...Contacts.Fields
};

export default contact;