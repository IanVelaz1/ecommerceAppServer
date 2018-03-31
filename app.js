const express=require('express'),
app=express(),
bodyParser=require('body-parser'),
morgan=require('morgan'),
mongoose=require('mongoose'),
cors = require('cors'),
passport=require('passport'),
path=require('path');

const dataBase=require('./config/dataBase');

const port=process.env.PORT || 3000;

mongoose.connect(dataBase.db);

mongoose.Promise=global.Promise;


//middlewares

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./routes/rutasProductos/rutasProductos')(app);
require('./routes/rutasColecciones/rutasColecciones')(app);
require('./routes/rutasInterfaz/rutasInterfaz')(app);

app.use(express.static(path.join(__dirname,"www")));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,"www/index.html"));
});

app.listen(port,(req,res)=>{

 console.log('====================================');
 console.log('conectado al puerto'+ port);
 console.log('====================================');

});
