const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// set up express app
const app = express();
const http = require("http").Server(app);

const mongodbURI =
  "mongodb://aspiretocode:aspiretocode@ds139067.mlab.com:39067/youtube-application";
// connect to mongodb
mongoose.connect(mongodbURI);

mongoose.Promise = global.Promise;

app.use(fileUpload());
app.use(express.static(`${__dirname}/static`));
// use body-parser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  console.log("IPAD CONNECTED");
  res.sendFile(`${__dirname}/index.html`);
});

app.use(cors({ origin: "*" }));

// initialize routes
app.use("/api", require("./routes/api"));

const appStart = () => {
  // listen for requests
  http.listen(process.env.PORT || 4000, () => {
    console.log("now listening for requests");
  });
};

module.exports = appStart;
