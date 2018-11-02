/*#############################################################|
|                        MIDDLEWARES
*##############################################################*/
let bodyParser = require("body-parser"); //parse data
let express = require("express"); //frameowork
let path = require("path"); //path location helper. dont need to be installed using npm
let expressValidator = require("express-validator");

// let logger = function(req, res, next) {
//
//     //middleware order is important, should come before the routes
//     console.log("Logging...");
//     next();
// };

app.use(bodyParser.json()); //allows to use JSON communication
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));//path
// app.use(logger); //to use middleware created above


/* Templating engine configuration =========================================== */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* express validator =========================================== */
app.use(expressValidator());
