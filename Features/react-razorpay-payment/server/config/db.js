import mongoose  from "mongoose";

 export const connectDB = async ()=> {
    try{
        await mongoose.connect('mongodb+srv://navin:mmdfL34xLyy0FY11@razor.tgq5kyf.mongodb.net/razordb');
        console.log("MongoDB is connected..");
    }catch(error){
        console.log(error.message)
        process.exit(1)
    }
};
// module.exports = connectDB;

// export const connectDB = async () => {
//     const {connection } = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`DB is connected with ${connection.host}`)
// }