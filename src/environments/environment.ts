// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDX8HnrVccyZTsqWK04Xg1sbKNgVJ0w_10',
    authDomain: 'photo-sharing-app-b1663.firebaseapp.com',
    databaseURL: 'https://photo-sharing-app-b1663.firebaseio.com',
    projectId: 'photo-sharing-app-b1663',
    storageBucket: 'photo-sharing-app-b1663.appspot.com',
    messagingSenderId: '361952141915'
  }
};
