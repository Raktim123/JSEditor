const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// import require router
const page = require('./router/page.js');

const app = express();

const config = {
	PORT: 8080,
	HOST: "localhost"
};

// route to handel static HTML page
app.use('/', page);

// route to handel static script file
app.use('/asset/js', express.static(path.join(__dirname,'../view/static/script'),{
	etag: true
}));

//route to handel wrong URL
app.use((req,res)=>{
	res
		.status(400)
		.sendFile(path.join(__dirname, '../view/page/404.html'));
});

app.listen(config.PORT, (err)=>{
	if(err){
		console.error("Error in server setup :(");
		console.log("You can make a pull request");
	}
	else{
		console.log('Server is running on port 8080 :)');
		console.log(`Please open http://${config.HOST}:${config.PORT} on your browser to visit.`);
	}
});