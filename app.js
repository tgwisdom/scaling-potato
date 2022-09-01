
const express = require('express')
const path = require('node:path')
const app = express()

//setting view engine to ejs
app.set("view engine", "ejs");

let userName = "Joe";

app.get('/', function (req, res) {
    //res.send('Hello ' + userName + ' from Node/Express/Heroku');
    //res.sendFile(path.join(__dirname, "index.html" ));
    //res.send(`Hello ${userName} from Heroku and Node`)
     
    res.render('index', 
    { userNameEjs : userNameExpress
    }
    );
})

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
