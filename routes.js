/*#############################################################|
|                        ROUTES
*##############################################################*/


let users = [
    {
        id: 1,
        firstName: "john",
        lastName: "Doe",
        email: "johndoe@gmail.com"
    },
    {
        id: 2,
        firstName: "Bob",
        lastName: "Smith",
        email: "jjackson@gmail.com"
    },
];

let title = "View Title param";
app.get("/", function (req, res) {


    res.render("index", {
        title,
        users
    }); //render a view
    // res.send("Hello!"); //just print into the screen
    // res.json(person);
});

app.get("/person", function (req, res) {

    const person = {
        name: "Jeff",
        age: 30
    };
    // res.send("Hello!"); //just print into the screen
    res.json(person);
});


app.post("/users/add", function (req, res) {

    req.checkBody('first_name', 'First name is required').notEmpty();
    req.checkBody('last_name', 'Last name is required').notEmpty();
    req.checkBody('first_name', 'Email is required').notEmpty();

    let errors = req.validationErrors();

    if (errors) {

        res.render("index", {
            title,
            users,
            errors
        });

    } else {

        const newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        };

        let full_name = newUser.first_name + " " + newUser.last_name;

        connection.query("INSERT INTO users(name,email) VALUES (?, ?)", [full_name, newUser.email],
            function (err, rows) {
                if (err) {
                    throw err;
                }

                res.json({
                    "Response": "The user was created successfully",
                    "user": newUser
                })


            }
        )
        ;


    }


});


app.get("/users", function (req, res) {

    connection.query('SELECT * FROM users', function (err, rows) {
        if (err) throw err;

        res.json({
            rows
        })
    });

});


// connection.end();