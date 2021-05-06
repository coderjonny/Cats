## Cats API Network Logger Demo

### Setup: 
1. Follow the react native setup guide here for setting up your environment https://reactnative.dev/docs/environment-setup
2. Do `yarn install`
3. Then make sure you also install cocoapods for this app `cd ios/ && pod install`
4. Start up metro: `yarn start`
5. Run app
	- ios: `yarn run ios`
	- android: `yarn run android`


### Testing the app for Metrics
1. On initial load, cats should fetch from the API and then save the first page of cats to the device's storage.
2. Scroll down and more cats will load 
3. Tapping into a cat will go into a details view and also do a fetch call for a random cat fact.
4. Tap on `Meowtrics` button to see the Metrics View.
5. On the Metrics View, there should be a log of network calls and the device make/model and OS version.

### Libraries Used:
- The network calls are collected and shown on the Metrics View by a library called:  `react-native-network-logger`
- Collecting the device info was helped by a library called: `react-native-device-info`
- `@react-native-async-storage/async-storage` to save the initial data load from the cats api. 