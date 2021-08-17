module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
    ignorePatterns: ['/*.js', '/lib/protobuf.js', '/lib/protobuf.d.ts'],
}
