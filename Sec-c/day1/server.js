const server = require("http")
server.createServer((req,res) =>{
   if(req.url==='/')
   {
      res.write("this is my first page")
   }
   else
      if(req.url==="/about"){
         res.write("this is my about page")
   }
   else
      if(req.url==="/contact"){
         res.write("this is my contact page")
      }
      else{
         res.write("404 page not found")
      }
    // res.write("<h1> Welcome to my server<h1>")
    // res.end("")
}).listen(4000,()=>{
   console.log("server is starting")
})

