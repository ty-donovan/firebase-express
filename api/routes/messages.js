var express = require('express');
var router = express.Router();

const db = require("./firebase");
const { collection, getDocs } = require("firebase/firestore");

// GET all messages from collection MESSAGES
router.get("/", async(req, res) => {
    const allDocs = [];

    const messagesCol = collection(db, "MESSAGES");
    const messageSnapshot = await getDocs(messagesCol);
    messageSnapshot.forEach((doc) => {
        allDocs.push(doc.data());
    });

    res.status(200).json(allDocs);
});

module.exports = router;