const express = require('express');
const router = require('./router/router');
const app = express();
const port = process.env.PORT || 9000;

app.use(router);

app.listen(port, () => {
    console.log('App is runnig on port:',port);
});