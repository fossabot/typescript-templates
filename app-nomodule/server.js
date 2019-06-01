const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));
app.use('/dist', express.static('dist'));
app.use('/lib-rollup-umd', express.static('node_modules/@adriangodong/lib-rollup-umd/dist'));

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
