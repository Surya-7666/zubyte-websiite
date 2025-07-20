const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // ✅ Check if email already exists
    const existing = await Message.findOne({ email });

    if (existing) {
      return res.status(400).json({ error: "This email has already submitted a message." });
    }

    // ✅ Save new message
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message received!" });
  } catch (err) {
    res.status(500).json({ error: "Server error, please try again." });
  }
});

module.exports = router;
