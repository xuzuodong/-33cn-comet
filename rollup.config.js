import typescript from '@rollup/plugin-typescript';

export default {
    input: 'lib/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    plugins: [
        typescript({ module: 'ESNext', tsconfig: './tsconfig.json' }),
    ]
    ,
    external: ['enc-utils', 'protobufjs/minimal']
};