import Chat from "../model/chat.js";

// GET /  -> show all chats on the page
export const showChats = async (req, res) => {
    try {
        const allchats = await Chat.find().sort({ created_at: 1 });
        res.render("index", { allchats });   // key must match the name used in index.ejs
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// POST /chats  -> save the form data, then go back to the page
export const createChatFromForm = async (req, res) => {
    try {
        const { from, to, msg } = req.body;
        await Chat.create({ from, to, msg });
        res.redirect("/");
    } catch (err) {
        res.status(400).send(err.message);
    }
};


export const deleteChatFromPage = async (req, res) => {
    try {
        await Chat.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (err) {
        res.status(400).send(err.message);
    }
};