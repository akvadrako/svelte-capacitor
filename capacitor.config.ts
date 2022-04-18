/**
* Capacitor config
* see https://capacitorjs.com/docs/config
*/

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'dev.cap', // TODO: add your app id
    appName: 'DevCap',
    webDir: 'public',
    bundledWebRuntime: false,
    backgroundColor: 'black',
    
    // set automatically
    // includePlugins: [],

    android: {
        allowMixedContent: true,
    },
    plugins: {
        "SplashScreen": {
            "launchShowDuration": 0
        }
    },
    // remove server section before making production build
    server: {
        // for android only, below settings will work out of the box
        // for iOS or both, change the url to http://your-device-ip 
        // To discover your workstation IP, just run ifconfig
        url: "http://192.168.20.5:5001",
        cleartext: true,
        androidScheme: 'https',
        allowNavigation: ['*'],
    }
};

export default config;
