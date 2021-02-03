const express = require("express");
const router = express.Router();
const List = require("../models/List");
const Item = require("../models/Item")

// Index Route ------------------------------------------
router.get("/", async (req, res) => {
  res.json(await List.find({}).populate('items'));
});
// Create Routes ----------------------------------------
router.post("/", async (req, res) => {
  res.json(await List.create(req.body));    
});

// Update Routes ----------------------------------------
router.put("/:id", async (req, res) => {
  res.json(
    await List.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

// Destroy Routes ----------------------------------------
router.delete("/:id", async (req, res) => {
  res.json(await List.findByIdAndRemove(req.params.id));
});

module.exports = router;
