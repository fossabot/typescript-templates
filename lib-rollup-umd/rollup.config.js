import { eslint } from 'rollup-plugin-eslint';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';

import pkg from './package.json'

// Must match tsconfig.json compilerOptions.outDir
const outDir = 'dist';

// Must match src/index.umd.d.ts export as namespace identifier
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
            tsconfigOverride: override,
            objectHashIgnoreUnknownHack: true
        }),
        copy({
            targets: ['src/index.umd.d.ts'],
            outputFolder: outDir
        })
    ],

    output: {
        name: umdGlobalVarName,
        sourcemap: true,
        file: pkg.browser,
        format: 'umd'
    }
}