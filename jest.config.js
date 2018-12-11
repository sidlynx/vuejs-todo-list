module.exports =
    {
        "verbose": true,
        "moduleFileExtensions": [
            "js",
            "vue",
            "json"
        ],
        "moduleNameMapper": {
            "^@/(.*)$": "<rootDir>/src/$1"
        },
        "transform": {
            "^.+\\.js$": "<rootDir>/node_modules/babel-7-jest",
            ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
        },
        "snapshotSerializers": [
            "<rootDir>/node_modules/jest-serializer-vue"
        ],
        "collectCoverage": true,
        "collectCoverageFrom": [
            "src/**/*.(js|vue)",
            "!**/node_modules/**"
        ],
        "coverageReporters": ["cobertura",
            "json",
            "lcov",
            "text-summary",
            "clover",
            "html"],
        "coverageThreshold": {
            "global": {
                "branches": 80,
                "functions": 80,
                "lines": 80,
                "statements": -10
            }
        },
        "snapshotSerializers": [
            "./node_modules/jest-serializer-vue"
        ],
        "transformIgnorePatterns": [],
        "roots": [
            "./tests/unit/jest/"
        ]
    }