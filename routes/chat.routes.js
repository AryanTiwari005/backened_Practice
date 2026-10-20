import express from "express";
const router = express.Router();
import {getChat,addChat,addBulkChats,DeleteOneChat,DeleteManyChats} from '../controllers/chatController.js';



router.get('/getchat',getChat);
router.post('/addchat',addChat);
router.post('/addBulkChats',addBulkChats);
router.delete('/deleteChat/:id',DeleteOneChat);
router.delete('/deleteChat',DeleteManyChats);
export default router;