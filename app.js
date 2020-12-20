require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const hbs = require("express-handlebars");
const hbshelpers = require("handlebars-helpers");
const multihelpers = hbshelpers();

const passport = require('./passport');
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const mongoose = require("./config/db");
const session = require("express-session");

const app = express();
const bodyParser = require("body-parser");
// const multer = require('multer') // v1.0.5
// const upload = multer() // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// run mongoose
mongoose.mongoose();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    helpers: multihelpers,
    defaultView: "default",
    layoutsDir: __dirname + "/views/layout/",
    partialsDir: __dirname + "/views/partials/",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Passport middlewares
app.use(session({ secret: process.env.SESSION_SECRET}));
app.use(passport.initialize());
app.use(passport.session());


//Pass req.user to res.local
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
})

//Routes
app.use("/", indexRouter);
app.use("/user", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
