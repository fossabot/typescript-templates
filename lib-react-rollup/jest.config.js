module.exports = {
    "transform": {
        ".(ts|tsx)": "ts-jest"
    },
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "json"
    ],
    "moduleNameMapper": {
        "\\.(less)$": "identity-obj-proxy"
    },
    "testPathIgnorePatterns": [
        "/node_modules/",
        "/dist/"
    ],
    "testRegex": "\\.spec\\.(ts|tsx)$"
}
