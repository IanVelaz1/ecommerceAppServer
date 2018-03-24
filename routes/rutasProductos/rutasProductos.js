const Producto=require('../../models/productosModel');
module.exports=(app)=>{
  app.get('/productos',(req,res)=>{
    Producto.obtenerProductos({},(error,producto)=>{
      if(error){
        res.json({error:error,msg:"error al recuperar productos",success:false});
      }else{
        res.json({success:true,producto});
      }

    });
  });

  

  
}