module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setup-tests.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/tools/style-mock.js",
  },
};
