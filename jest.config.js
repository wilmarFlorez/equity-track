module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['./jest-setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
}
