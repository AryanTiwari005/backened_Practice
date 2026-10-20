import mongoose from "mongoose";


const ChatSchema = mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
    },
    msg:{
        type:String,
        maxLength: 50
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})

const chat = mongoose.model('chat',ChatSchema);
export default chat;