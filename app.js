/*#############################################################|
|                        INITIAL CONFIGURATION
*##############################################################*/

/* Dependencies =========================================== */

let express = require("express"); //frameowork

/* Constants =========================================== */
const port = 3000;

/* Server Init =========================================== */
app = express();
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});

/* Database (MYSQL) =========================================== */

mysql = require('mysql');
connection = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs-admin',
    password: '32258190',
    database: 'nodeExpress'
});

connection.connect();

/* Globals =========================================== */
// app.use(function(req,res,next){
//     res.locals.errors = null;
//     next();
// });


/* Middlewares =========================================== */
require("./middlewares.js");

/*#############################################################|
|                        ROUTING
*##############################################################*/
require('./routes.js');


