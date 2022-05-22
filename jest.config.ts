
export default {
  roots:["<rootDir>/src"],
  collectCoverFrom:["<rootDir/src/**/*.ts>"],
  coverageDirectory: "coverage",
  testEnvironment:"node",
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: "v8",
  transform: {
    '.+\\.ts$':'ts-jest'
  },

  
};
