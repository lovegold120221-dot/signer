export const environment = {
  production: true,
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
    textNormalizationUrl: 'https://api.eburon.ai/text-normalization',
    signWritingDescriptionUrl: 'https://api.eburon.ai/signwriting-description',
    spokenTextToSignWritingUrl: 'https://api.eburon.ai/spoken-text-to-signwriting',
    spokenTextToSignedPoseUrl: 'https://api.eburon.ai/spoken-text-to-signed-pose',
    spokenTextToSignedVideoUrl: 'https://api.eburon.ai/spoken-text-to-signed-video',
    imageToAvatarUrl: 'https://api.eburon.ai/image-to-avatar/',
  },
  signedLanguageBackends: {
    vgt: {
      spokenTextToSignedPoseUrl: 'https://api.eburon.ai/spoken-text-to-signed-pose',
      spokenTextToSignedVideoUrl: 'https://api.eburon.ai/spoken-text-to-signed-video',
      imageToAvatarUrl: 'https://api.eburon.ai/image-to-avatar/',
    },
  },
};
