import { createJiti } from "jiti"
import { fileURLToPath } from "node:url"
const { withExpo } = require('@expo/next-adapter');

const jiti = createJiti(fileURLToPath(import.meta.url))

// Import env here to validate during build. Using jiti we can import .ts files :)
await jiti.import("./src/env.ts")

module.exports = withExpo({
  // transpilePackages is a Next.js +13.1 feature.
  // older versions can use next-transpile-modules
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    // Add more React Native/Expo packages here...
  ],
});



