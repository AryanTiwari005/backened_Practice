import dotenv from "dotenv";
import express from "express";
import connectDB from "./db.js";
import chatRoutes from './routes/chat.routes.js';
import pageRoutes from './routes/page.routes.js';
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

const PORT = process.env.PORT || 5000;
app.use('/api/chats',chatRoutes);
app.use('/',pageRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 