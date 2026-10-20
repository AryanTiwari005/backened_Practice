import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "../db.js";
import Chat from "../model/chat.js";

const chats = [
    { from: "neha",  to: "preeti", msg: "send me notes for the exam" },
    { from: "rohit", to: "mohit",  msg: "teach me JS callbacks" },
    { from: "amit",  to: "sumit",  msg: "all the best!" }
];

const seedDB = async () => {
    try {
        await connectDB();
        await Chat.deleteMany({});               // start clean so re-running doesn't duplicate
        const result = await Chat.insertMany(chats);
        console.log(`${result.length} chats inserted successfully`);
    } catch (error) {
        console.error("Error seeding database:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
};

seedDB();