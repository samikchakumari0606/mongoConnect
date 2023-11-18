

const express=require("express");
require("./config");//mongoose
const Product=require("./product");//schema

const app=express();
app.use(express.json())

app.post("/create",async (req,res)=>{
  let data=new Product(req.body);//sending data
  let result=await data.save();//saving data
  console.log(result)
  res.send(result)
//  res.send("done")
  //  console.log(req.body)
})


app.get("/list",async (req,res)=>{
 let data=await Product.find()
 res.send(data)
})

app.delete("/delete/:_id",async (req,res)=>{
  console.log(req.params)//sending id which we want to delete using req.params
  let data=await Product.deleteOne(req.params)//wating to get id
  console.log(data)
  res.send("done");//delete id product
})


app.put("/update/:_id",async(req,res)=>{
  console.log(req.params)
  let data=await Product.updateOne(req.params,
    {
       $set:req.body//want update through body using id
    })
})

app.listen(8000,()=>{
  console.log("server is started")
})