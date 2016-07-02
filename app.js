var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    Campground              = require("./models/campgrounds"),
    Comment                 = require("./models/comment"),
    seedDB                  = require("./seeds"),
    passport                = require("passport"),
    methodOverride          = require("method-override"),
    LocalStrategy           = require("passport-local"),
    User                    = require("./models/user"),
    flash                   = require("connect-flash");
    
var commentRoutes       = require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds"),
    authRoutes          = require("./routes/index")


// mongoose.connect("mongodb://localhost/yelp_camp");
mongoose.connect("mongodb://boots525:awrt30ml@ds011775.mlab.com:11775/yelpcamp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); 
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

//pasport config

app.use(require("express-session")({
    secret: "Scout is a cool doggy",
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize()); 
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success")
    next();
})

app.use(authRoutes); 
app.use("/campgrounds", campgroundRoutes); 
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("yelpcamp has started!")
});

