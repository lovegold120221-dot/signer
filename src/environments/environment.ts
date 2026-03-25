// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCSBovVkOZPynGBXrl7n6Z1JUyY0rZ49bI',
    authDomain: 'macx-5feca.firebaseapp.com',
    databaseURL: 'https://macx-5feca-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'macx-5feca',
    storageBucket: 'macx-5feca.firebasestorage.app',
    messagingSenderId: '331391736018',
    appId: '1:331391736018:web:808acfc0054f4df7f0750b',
    measurementId: 'G-B4W8YRZ4T4',
  },
  reCAPTCHAKey: '6Ldsxb8oAAAAAGyUZbyd0QruivPSudqAWFygR-4t',
  translationApi: {
    textNormalizationUrl: 'http://localhost:3000/text-normalization',
    signWritingDescriptionUrl: 'http://localhost:3000/signwriting-description',
    spokenTextToSignWritingUrl: 'http://localhost:3000/spoken-text-to-signwriting',
    spokenTextToSignedPoseUrl: 'http://localhost:3000/spoken-text-to-signed-pose',
    spokenTextToSignedVideoUrl: 'http://localhost:3000/spoken-text-to-signed-video',
    imageToAvatarUrl: 'http://localhost:3000/image-to-avatar/',
  },
  signedLanguageBackends: {
    vgt: {
      spokenTextToSignedPoseUrl: 'http://localhost:3000/spoken-text-to-signed-pose',
      spokenTextToSignedVideoUrl: 'http://localhost:3000/spoken-text-to-signed-video',
      imageToAvatarUrl: 'http://localhost:3000/image-to-avatar/',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
