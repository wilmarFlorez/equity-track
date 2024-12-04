const expoPreset = require('jest-expo/jest-preset')
const jestPreset = require('@testing-library/react-native/jest-preset')

module.exports = {
  ...expoPreset,
  ...jestPreset,
}
