// app require
const app = require("./app");

// dotenv Implement
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
// Port number
const Port = process.env.PORT;

// app listen 
app.listen(300, function() {
    console.log(`Server Runing with mobile PORT ${Port}`);
});

