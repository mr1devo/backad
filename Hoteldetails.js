const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://projectx061:projectbca24@cluster0.n4wn0ea.mongodb.net/db1?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let hd=mongoose.Schema;
const hotel = new hd(
    {
        hotelname:String,
        htsee:String,
        hlocation:String,
        hotelphoto:{
            data : Buffer,
            contentType:String,}
       
        
        }
);



var hotelmodel =mongoose.model("hotel",hotel)
module.exports=hotelmodel;
