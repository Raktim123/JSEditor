const express = require('express');
const path = require('path');
const router = express.Router();

// home page route handler
router.get('/', (req,res)=>{
	res
		.status(200)
		.sendFile(path.join(__dirname, '../../view/page/index.html'));
});

// signin page route handler
router.get('/signin', (req,res)=>{
	res
		.status(200)
		.sendFile(path.join(__dirname, '../../view/page/signin.html'));
});

// signup page route handler
router.get('/signup', (req,res)=>{
	res
		.status(200)
		.sendFile(path.join(__dirname, '../../view/page/signup.html'));
});

// about page route handler
router.get('/about', (req,res)=>{
	res
		.status(200)
		.sendFile(path.join(__dirname, '../../view/page/about.html'));
});

module.exports = router;