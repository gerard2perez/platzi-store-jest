/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  verbose: true,
  // coveragePathIgnorePatterns: ['node_modules', '__.*'],
  // collectCoverageFrom: ['<rootDir>/src/**/*.*'],
  coverageReporters: ['html', 'clover', 'json', 'lcov', 'text-summary'],
  collectCoverage: true,
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setupTest.js'],
  moduleNameMapper: {
    '\\.(styl|css)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
};
