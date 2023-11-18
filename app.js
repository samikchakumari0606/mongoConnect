const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");
const productSchema=new mongoose.Schema({
   name:String,
   price:Number,
   brand:String
});

const saveInDB=async ()=>{
 

   const ProductModel= mongoose.model("products",productSchema);
   let data=new ProductModel({
    name:"m8",
    price:200,
    brand:"xyz"
    });
   let result=await data.save();
   console.log(result)
}

const updateInDb=async()=>{
    const ProductModel= mongoose.model("products",productSchema);
    let data=await ProductModel.updateOne({name:"m8"},
    {
      $set:{price:800}
    }
    )
    console.log(data)
}


const deleteInDb=async()=>{
    const ProductModel= mongoose.model("products",productSchema);
    let data=await ProductModel.deleteOne({name:"m8"})
    console.log(data)
}



const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({name:'m8'})
    console.log(data);
}
findInDB()

