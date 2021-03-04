import * as Contacts from 'expo-contacts';

const contact = {
    check: () => {
        return Contacts.getPermissionsAsync();
    },
    prepare: () => {
        return Contacts.requestPermissionsAsync();
    },
    all: (fields = null) => {
        if (!fields) {
            fields = [
                // https://github.com/expo/expo/blob/master/apps/native-component-list/src/screens/Contacts/ContactUtils.ts#L29
                Contacts.Fields.Emails,
                Contacts.Fields.PhoneNumbers
            ];
        }

        const criteria = {
            fields: fields,
            sort: Contacts.SortTypes.FirstName
        };

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