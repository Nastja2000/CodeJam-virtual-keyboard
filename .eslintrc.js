module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base"
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
        "space-before-function-paren": "off",

        "func-names": "off",
        "object-shorthand": "off",
        "no-unused-vars": "off",
        "no-param-reassign": "off",
        "no-use-before-define": "off",

        "max-len": ["error", 150, 2, { ignoreUrls: true, }],
        "prettier/prettier": "off",
        "no-alert": "error",
        "no-console": "error",
        "no-plusplus": "error"
    }
};