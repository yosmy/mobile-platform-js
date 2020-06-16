import * as Permissions from 'expo-permissions';

const permission = {
    CAMERA: Permissions.CAMERA,
    CAMERA_ROLL: Permissions.CAMERA_ROLL,
    CONTACTS: Permissions.CONTACTS,
    NOTIFICATIONS: Permissions.NOTIFICATIONS,
    get: (types) => {
        return Permissions.getAsync(types);
    },
    ask: (types) => {
        return Permissions.askAsync(types)
    }
};

export default permission;