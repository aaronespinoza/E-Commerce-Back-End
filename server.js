const express = require('express');
const routes = require('./routes');
const sequalize = require("./config/connection");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequalize.sync({ force: false}).then(()=> {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
