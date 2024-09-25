import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import {
  getMessages,
  sendMessage,
  getConversations,
} from "../controllers/messageController.js";

const router = express.Router();

router.get("/conversations", protectRoute, getConversations);
router.get("/:otherUserId", protectRoute, getMessages);
router.post("/", protectRoute, sendMessage);

// New route for public room
router.get("/public", async (req, res) => {
  try {
    const publicMessages = await Message.find({
      conversationId: (await Conversation.findOne({ isPublic: true }))._id,
    }).sort({ createdAt: 1 });
    res.status(200).json(publicMessages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
