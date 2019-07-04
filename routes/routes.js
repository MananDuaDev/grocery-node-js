const express = require('express');
const apiRoutes = express.Router();
const db = require('./../models/model.js');
apiRoutes.post('/grocery',(req,res) =>{
	console.log("body", req.body);
	db.insert(req.body,function(err,newDoc){
		if(err){
	  	res.send(err.message);
	  }
	  else{
	  	res.send(newDoc);
	  }
	});
});

module.exports = apiRoutes;