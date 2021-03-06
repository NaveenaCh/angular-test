try { //Install express server
    var express = require('express');
    var app = express();

    // Serve only the static files form the dist directory
    app.use(express.static(__dirname + '/dist'));

    // Start the app by listening on the default Heroku port
    app.listen(process.env.PORT || 8080);
    console.log("app server is listening at 8080");
} catch (e) {
    console.log("server error" + e)
}