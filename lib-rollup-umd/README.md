# How did we get here

1. Create directory, `npm init`

2. Install npm packages
```
npm i -D typescript eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm i -D rollup rollup-plugin-typescript2 rollup-plugin-eslint
npm i -D jest ts-jest @types/jest
```

3. Modify package scripts
```
    "build": "rollup -c ./rollup.config.js",
```

4. Add files