module.exports = {
  preset: 'react-native',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testMatch: ['**/__tests__/unit/**/*.spec.js?(x)'],
  timers: 'fake',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(react-native|react-native-device-info)/)'],
};
