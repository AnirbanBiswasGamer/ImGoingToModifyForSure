import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ytify.app',
  appName: 'Ytify',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: 'build-resources/android.keystore',
      keystoreAlias: 'ytify',
      keystorePassword: 'ytify',
      keyPassword: 'ytify'
    }
  }
};

export default config; 