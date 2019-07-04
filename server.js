//import kar rahe hai basic modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
 
const port = 3010;

const groceryRoutes = require('./routes/routes');

app.use(morgan('dev'));//to log everything on console

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	'extended': 'true'
}));
app.use(express.static(__dirname + '/public'));

app.use('/v1', groceryRoutes);
// //give data on the bases of url
// app.get('/user/:id', (req, res) => {
// 	console.log(req.params.id);
// 	res.send("manan dua");
// });

// app.get('/home',(req, res) =>{
// 	res.send("manan");
// });


app.get('*', (req, res) => {
	res.send('public/index.html');
});


app.listen(port);
console.log("server started"); 

