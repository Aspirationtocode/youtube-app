const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// set up express app
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const mongodbURI =
	'mongodb://aspiretocode:aspiretocode@ds139067.mlab.com:39067/youtube-application';
// connect to mongodb
mongoose.connect(mongodbURI);

mongoose.Promise = global.Promise;

app.use(fileUpload());
app.use(express.static(`${__dirname}/static`));
// use body-parser middleware
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

app.get('/', (req, res) => {
	console.log('IPAD CONNECTED');
	res.sendFile(`${__dirname}/index.html`);
});

app.use(cors({ origin: '*' }));

// initialize routes
app.use('/api', require('./routes/api'));

const appStart = () => {
	// listen for requests
	http.listen(process.env.PORT || 4000, () => {
		console.log('now listening for requests');
	});

	io.on('connection', socket => {
		console.log('a user connected');
		socket.on('disconnect', () => {
			console.log('user disconnected');
		});

		socket.on('get-confirmation', currentQuestion => {
			io.emit('wait-confirmation', currentQuestion);
		});
		socket.on('set-confirmation', currentQuestion => {
			io.emit('set-confirmation-client', currentQuestion);
		});
	});
};

module.exports = appStart;
