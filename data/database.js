import mongoose from "mongoose";

export const connectDB = () => {
mongoose.connect(process.env.MONGO_URI, {
    dbName: "backendapi",
}).then(c => console.log("Databse connected"))
    .catch(e => console.log(e));
}