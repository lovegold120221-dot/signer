export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyB2j-StB_bC9xbsgifFNkM3VIyDGJmZ7rQ',
    authDomain: 'impactful-ring-469323-e5.firebaseapp.com',
    databaseURL: 'https://impactful-ring-469323-e5-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'impactful-ring-469323-e5',
    storageBucket: 'impactful-ring-469323-e5.firebasestorage.app',
    messagingSenderId: '316842561818',
    appId: '1:316842561818:web:5d590a68599c1c3a2c5ca3',
    measurementId: 'G-3SPB7L18VG',
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
