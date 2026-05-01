const express =  require("express");
const routes = express.Router();
const {homepage,login,course,createcourse,profile,logout} = require("../controls/usercontrol");

routes.get("/", homepage);
routes.post("/login", login);
routes.get("/course",course);
routes.get("/create-course",createcourse);
routes.get("/profile",profile);
routes.get("/logout",logout);


module.exports = routes;