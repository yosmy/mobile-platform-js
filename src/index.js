import application from './Application';
import {back, Props as BackProps} from './Back';
import {cache, Props as CacheProps} from './Cache';
import cellular from './Cellular';
import clipboard from './Clipboard';
import {contact, Props as ContactProps} from './Contact';
import device from './Device';
import {dimension, Props as DimensionProps} from './Dimension';
import haptics from './Haptics';
import image from './Image';
import linking from './Linking';
import localization from './Localization';
import network from './Network';
import notification from './Notification';
import review from './Review';
import scanner from './Scanner';
import secure from './Secure';
import select from './Select';
import share from './Share';
import store from './Store';
import update from './Update';
import vibration from './Vibration';

export default {
    application,
    back, BackProps,
    cache, CacheProps,
    cellular,
    clipboard,
    contact, ContactProps,
    device,
    dimension: dimension, DimensionProps,
    haptics,
    image,
    linking,
    localization,
    network,
    notification,
    review,
    scanner,
    secure,
    select,
    share,
    store,
    update,
    vibration,
}