//home page
function homepage(req,res){
    if (!req.session.user) {
        return res.send("welcome back bro ! last time you logged in as " + req.cookies.user)
    }
    res.send("welcome bro !")
}
function login(req,res){
    const name = req.body.username
    const role = req.body.role

    req.session.user = { name, role }
    res.cookie("user", name)

    res.send("Logged in")
}
function course(req,res){
     if (!req.session.user) {
        return res.send("login required")
    }
    res.send("you can view courses")
}
function createcourse(req,res){
    if (!req.session.user) {
        return res.send("login required")
    }
    if (req.session.user.role !== "instructor") {
        return res.send("access denied")
    }
    res.send("course created")
}
function profile(req,res){
    app.get("/profile", (req, res) => {
        if (!req.session.user) {
            return res.send("login required")
        }
        res.send("Username: " + req.session.user.name + " Role: " + req.session.user.role)
    })
}
function logout(req,res){
     req.session.destroy(() => {})
    res.clearCookie("connect.sid")
    res.send("logged out")
}
module.exports = {
    homepage,
    login,
    course,
    createcourse,
    profile,
    logout
}