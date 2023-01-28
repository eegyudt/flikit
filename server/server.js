const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 54321;


// database?


//routes

//middleware
app.use(morgan('dev'));



app.listen(port, () => {
  console.log(`app is listening on port ${port}`);


});