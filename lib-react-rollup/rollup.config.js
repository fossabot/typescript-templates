import { eslint } from 'rollup-plugin-eslint';
import typescript from 'rollup-plugin-typescript2';
import less from 'rollup-plugin-less';

import pkg from './package.json'

// Only include src files
let override = { include: ['src/**/*'] };

export default {
    input: './src/index.ts',

    plugins: [
        less({
            output: './dist/bundle.css'
        }),
        eslint({
            include: ['**/*.ts*']
        }),
        typescript({
            tsconfigOverride: override
        })
    ],

    output: {
        sourcemap: true,
        file: pkg.module,
        format: 'esm'
    }
}