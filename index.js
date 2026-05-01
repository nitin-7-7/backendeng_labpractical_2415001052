const express = require("express")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const user = require("./routes/user")
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(session({
    secret: "abc",
    resave: false,
    saveUninitialized: false
}))

app.use("/", user)

app.listen(3000)