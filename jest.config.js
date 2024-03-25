const config = {
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/__mocks__/setup.js"],
  // ...
};

module.exports = config;
