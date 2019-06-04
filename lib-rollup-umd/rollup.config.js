import { eslint } from 'rollup-plugin-eslint';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json'

// Must match index.umd.d.ts export as namespace identifier
const umdGlobalVarName = 'LibRollupUmd';

// Only include src files
let override = { include: ['src/**/*'] };

export default {
    input: './src/index.ts',

    plugins: [
        eslint({
            include: ['**/*.ts*']
        }),
        typescript({
            tsconfigOverride: override
        })
    ],

    output: {
        name: umdGlobalVarName,
        sourcemap: true,
        file: pkg.browser,
        format: 'umd'
    }
}