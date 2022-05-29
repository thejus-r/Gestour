const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const morgan = require("morgan")
const methodOverride = require("method-override")
const passport = require("passport")
const session = require("express-session")
const exhbs = require("express-handlebars")
const MongoStore = require("connect-mongo")(session)
const connectDB = require("./config/db")
const { urlencoded } = require("express")

// 1. Load Config Files

dotenv.config({path: "./config/config.env"})

//passport config

require("./config/passport")(passport)


//connection to mongoDB from ./config/db.js

connectDB()

const app = express()

// Body Parser

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//method override

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

// Logging

if(process.env.NODE_ENV == "development"){
    app.use(morgan("dev"))
}

//Handlebar Helpers

const {formatDate, truncate, stripTags, editIcon, select} = require("./helpers/hbs")


// Handlebars

app.engine('.hbs', exhbs({ helpers: {
  formatDate,
  stripTags,
  truncate,
  editIcon,
  select,
}, defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');


//sessions middleware

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
  }))

//passport middleware

app.use(passport.initialize())
app.use(passport.session())

//set global variable

app.use(function(req,res,next){
  res.locals.user = req.user || null
  next()
})

//static files

app.use(express.static(path.join(__dirname, "public")))

//routes
app.use("/", require("./routes/index"))
app.use("/auth", require("./routes/auth"))
app.use("/stories", require("./routes/stories"))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode in port ${PORT}`))