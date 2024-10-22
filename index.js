const Express = require("express");
const products = require("./products.json")
//Create A API server
const API_SERVER = Express();
//serving static files
API_SERVER.use(Express.static("public"))
//Middleware

//Route /
API_SERVER.get("/",function(request,response){
    // console.log("HIT")
    // console.log(request);
    // console.log(response);
    // return response.send("- Request Received");
    return response.json({
        message:"hello folks",
        success:true
    });
})

//Route /products
API_SERVER.get("/products",function(request,response){
    // console.log("HIT")
    // console.log(request);
    // console.log(response);
    // return response.send("- Request Received");

    // const products = require("./products.json")
    return response.json({
        message:"products fetched sucessfully",
        success:true,
        data:products
    });
    
})

//Route /product/create
API_SERVER.post("/products/create",function(request,response){
    console.log(request.body)
    return response.json({
        message:"products created sucessfully",
        success:true
    });
    
})


//Start The Server And Listen The Server's Request And Response
API_SERVER.listen(3000,"localhost",function(){
    console.log("server started http://localhost:3000");
})
