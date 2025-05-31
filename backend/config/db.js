import mongoose from "mongoose";

const connectDB=()=>{mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB is connected ⭐️")
}).catch((er)=>{
    console.log(er.message)
})}

export default connectDB