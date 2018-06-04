import {
    Platform,
    Dimensions,
    Easing, NativeModules,
} from 'react-native';

const window = Dimensions.get('window');


export default {
    isAndroid: Platform.OS === 'android',

    isDev: true,

    persistStore: {
        key: 'BEE_APP',
        debounce: 100,
    },

    // App Details
    appName: 'BeeApp',
    appVersion: 'v0.0.0',
    defaultLanguage: 'en',

    // Window Dimensions
    window: {
        width: window.width,
        height: window.height,
    },
};
