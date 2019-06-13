const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/dist', express.static('dist'));
app.use('/lib-react-rollup', express.static('node_modules/@adriangodong/lib-react-rollup/dist'));
app.use('/lib-react-webpack', express.static('node_modules/@adriangodong/lib-react-webpack/dist'));

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
