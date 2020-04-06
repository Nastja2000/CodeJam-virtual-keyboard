module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base",
        "eslint-config-prettier"
    ],
    "plugins": [
        "eslint-plugin-prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": "off",
        "arrow-parens": "off",
        "object-curly-newline": "off",
        "no-mixed-operators": "off",
        "arrow-body-style": "off",
        "function-paren-newline": "off",
        "no-plusplus": "off",
        "space-before-function-paren": "off",
        "no-console": "off",
        "func-names": "off",
        "object-shorthand": "off",
        "no-unused-vars": "off",

        "max-len": ["error", 100, 2, { ignoreUrls: true, }],
        "prettier/prettier": "error",
        "no-alert": "error"
    }
};