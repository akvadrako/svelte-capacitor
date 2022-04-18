# Svelte + Capacitor Demo

TODO 2
- add nativescript plugin
- show url in bottom bar
- get ionic UI widgets working
- get other new UI widgets working

TODO
- run locally
- run on phone
- take picture
- install nativescript
- use as home screen
- web-based console

Features
- https://github.com/seemoo-lab/AirGuard

## Basics

dev run

    npm i
    npm run dev:start

or

    npx cap run android

    npm run dev:android

build

    npm run build:android

## livereload (hot reload)

`server.url` section in `capacitor.config.json` to use `http://10.0.2.2:5001` (only for emulator)

## Setup

    npx cap add android

You need at least SDK platform tools and one of the Google Play system images.

## Troubleshooting

Logs

    adb logcat --pid=`adb shell pidof -s com.svelte.capacitor` -v 'brief color'

Misc

- https://github.com/ionic-team/native-run
- npx native-run --sdk-info

## Quick Tips

See

- `android/app/build.gradle`
- see https://github.com/akvadrako/svelte-capacitor
- fork of https://github.com/drannex42/svelte-capacitor

Debugging

- visit chrome://inspect#devices
- Place any assets, CSS, client JS, Images in the `assets` folder
- @components, @store, and @utils

To update icon.png and splash.png

    cordova-res android --skip-config --copy

