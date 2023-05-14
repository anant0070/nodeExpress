import { connectDB } from "./data/database.js"
import { app } from "./app.js"

connectDB()

app.listen(process.env.PORT,()=>{
    console.log(`Server is wroking on ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
})