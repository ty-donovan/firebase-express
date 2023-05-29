var express = require('express');
var router = express.Router();

const db = require("./firebase");
const { collection, getDocs, doc, getDoc, addDoc, deleteDoc, updateDoc } = require("firebase/firestore");
// GET all messages from collection MESSAGES
router.get("/", async (req, res) => {
  try {
    const allDocs = [];

    const messagesCol = collection(db, "MESSAGES");
    const messageSnapshot = await getDocs(messagesCol);
    messageSnapshot.forEach((doc) => {
      allDocs.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(allDocs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
});

// POST a new message to collection MESSAGES
router.post("/", async (req, res) => {
  try {
    const { name, message } = req.body;

    const messagesCol = collection(db, "MESSAGES");
    const docRef = await addDoc(messagesCol, {
      name: name,
      message: message,
    });

    res.status(200).json({ message: "Message added to database", docRef });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add message to database" });
  }
});

// DELETE a message from collection MESSAGES
router.delete("/:id", async (req, res) => {
  try {
    const messageId = req.params.id;

    console.log(messageId);

    const messagesCol = collection(db, "MESSAGES");
    const messageDoc = doc(messagesCol, messageId);
    const messageSnapshot = await getDoc(messageDoc);

    if (!messageSnapshot.exists()) {
      res.status(404).json({ error: "Message not found" });
      return;
    }

    await deleteDoc(messageDoc);

    res.status(200).json({ message: "Message deleted from database" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete message from database" });
  }
});

// UPDATE a message from collection MESSAGES
router.put("/:id", async (req, res) => {
    try {
        const messageId = req.params.id;
        const { name, message } = req.body;

        const messagesCol = collection(db, "MESSAGES");
        const messageDoc = doc(messagesCol, messageId);
        const messageSnapshot = await getDoc(messageDoc);

        if (!messageSnapshot.exists()) {
            res.status(404).json({ error: "Message not found" });
            return;
        }

        await updateDoc(messageDoc, {
            name: name,
            message: message,
        });

        res.status(200).json({ message: "Message updated in database" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update message in database" });
    }
});


module.exports = router;