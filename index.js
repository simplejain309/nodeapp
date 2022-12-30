var express = require('express')
var ejs= require('ejs')
//var bodyParser = require('body-parser');

var app= express ();
app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(8080);
//app.use(bodyParser.urlencoded({extended:true}));
//localhost:8080
app.get('/', function(req,res){


  res.render('pages/index');  

});

app.get('/about', function(req,res){


    res.render('pages/about');  
  
  });
  app.get('/services', function(req,res){


    res.render('pages/services');  
  
  });
  app.get('/blog', function(req,res){


    res.render('pages/blog');  
  
  });
  app.get('/contact', function(req,res){


    res.render('pages/contact');  
  
  });
  app.get('/events', function(req,res){


    res.render('pages/events');  
  
  });



