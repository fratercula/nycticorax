module.exports = {
  verbose: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFiles: ['./test/setup.js'],
  testEnvironment: 'jsdom',
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
