import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  transform: {
  ".(j|t)sx?$": "ts-jest"
  },
  testEnvironment: "./docroot/themes/custom/souvenirs/src/js/__test__/jsdom-custom.js",
  testURL: "http://test.com/",
  
  testMatch: [
    "<rootDir>/docroot/themes/custom/souvenirs/src/js/__test__/*.test.js"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/docroot/themes/custom/souvenirs/src/js/__test__/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/docroot/themes/custom/souvenirs/src/js/__test__/__mocks__/styleMock.js"
  }
};
export default config;
