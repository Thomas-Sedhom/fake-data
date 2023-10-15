const   homeController = require("./controllers/homeController"),
        errorController = require("./controllers/errorController"),
        layouts = require("express-ejs-layouts"),
        path = require('path'),
        express = require("express"),
        app = express();

app.use(layouts);
app.set("view engine", 'ejs');

app.use(express.static("public"));

app.use( express.urlencoded({ extended: false }) );
app.use(express.json());
//Tell the Express.js app to use body-parser for processing URLencoded and JSON parameters.

app.get("/", (req, res) => {

    res.render("index");
});

app.get("/courses", homeController.courses);

app.get("/contact", homeController.contact);

app.post("/contact", homeController.contact);

app.use(errorController.notFound);
app.use(errorController.resEror);

app.listen(3000);