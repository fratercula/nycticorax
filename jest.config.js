module.exports = {
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.less$': 'identity-obj-proxy',
  },
  setupFiles: ['./test/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
