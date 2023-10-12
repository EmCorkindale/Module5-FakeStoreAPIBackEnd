const express = require("express");
// import all store routes
const storeRoutes = require('./Routes/emsEmporiumRoutes');
const app = express();
const app2 = express();
//Import and map Swagger
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);
const axios = require ("axios")

// map the store routes to server
app.use('/emsEmporium', storeRoutes)
const port = 3002;


//This is the code to use our html, css, etc
app.use('/', express.static('Public'))


app.listen(port, () => {
  console.log(`Example app listening
    at http://localhost:${port}`);
});


