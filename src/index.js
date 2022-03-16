const express = require("express");
const morgan = require("morgan"); // de code scss ma khong can vao file css sua lai
const path = require("path");
// const { handlebars } = require("express-handlebars");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");

db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
    express.urlencoded({
        // middleware xu li du lieu duoc submit len tu form
        extended: true,
    })
);
app.use(express.json());
// HTTP logger
app.use(morgan("combined"));

// Template engine
// app.engine('hbs', handlebars({
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
