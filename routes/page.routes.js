import express from "express";
import { showChats, createChatFromForm, deleteChatFromPage } from "../controllers/pageController.js";

const router = express.Router();

router.get("/", showChats);
router.post("/chats", createChatFromForm);


router.post("/chats/:id/delete", deleteChatFromPage);

export default router;