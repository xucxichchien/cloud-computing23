const  express = require("express");
const PORT = process.env.PORT || 80;
const appServer = express();
const router = express.Router();
const fs = require("fs");

// ------------------- Routing
router.get( "/" , (yeucau, trave) => {
    data = fs.readFileSync("main.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/home" , (yeucau, trave) => {
    data = fs.readFileSync("home.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/products" , (yeucau, trave) => {
    data = fs.readFileSync("products.html");
    pageContent = data.toString();
    trave.send(pageContent);
});


// -------------------------

// ----------------Middleware
//const express = require('express');
//const app = express();
//const router = express.Router();

//router.use((yeucau, trave, next) => {
    //console.log('Time: ', Date.now());
   // next();
//});

//router.get('home', (yeucau,trave) => {
   // res.send("ok");
//});

//app.use('/', router);
//----------------------
appServer.use("/", router);
// ----------- RUN / Launching !!! 
appServer.listen( PORT );

console.log("Web da mo tai " + PORT);
