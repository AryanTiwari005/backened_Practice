import chat from "../model/chat.js";

export const getChat = async (req, res) => {
    try {
        const chats = await chat.find();
        res.status(200).json({ chats });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const addChat = async (req, res) => {
    try {
        const { from, to, msg } = req.body;
        const newChat = await chat.create({ from, to, msg });
        res.status(201).json({
            newChat,
            message: "new chat is created"
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const addBulkChats = async (req, res) => {
    try {
        const result = await chat.insertMany(req.body);
        res.status(201).json({
            message: "Chats created successfully",
            data: result
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};



export const DeleteOneChat = async(req,res)=>{
    try{
        const { id } = req.params;
        const deleted = await chat.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Chat not found" });
        }
        res.status(200).json({ message: "Chat deleted successfully" });
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const DeleteManyChats = async (req, res) => {
    try {
        const { ids } = req.body ?? {};

        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ message: "Please send a non-empty array of ids" });
        }

        const result = await chat.deleteMany({ _id: { $in: ids } });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No chats found for the given ids" });
        }

        res.status(200).json({ message: `${result.deletedCount} chats deleted successfully` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};