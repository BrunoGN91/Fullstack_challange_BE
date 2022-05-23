const express = require("express");
const app = express();
const path = require("path");
const mainRoute = require("./routes/mainRoute")
const apiRoutes = require("./routes/apiRoutes");
const methodOverride = require('method-override')
const cors = require("cors");
app.use(methodOverride('_method'))
app.use(cors(), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'../public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/', mainRoute)
app.use('/api', apiRoutes)

// Cors


app.listen(8888, (req, res) => {
    console.log("listening to port 8888");
})

