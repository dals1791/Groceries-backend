const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const List = require("../models/List");
// Index Route ------------------------------------------
router.get("/", async (req, res) => {
  res.json(await Item.find({}));
});
// Create Routes ----------------------------------------
router.post("/:listId", async (req, res) => {
    const list = await List.findById(req.params.listId)
    
    const item = await Item.create(req.body)
    list.items.push(item._id)
    list.save()
    res.json(list.populate("items"))
    
});
// Update Routes ----------------------------------------
router.put("/:id", async (req, res) => {
  res.json(
    await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    )
    
});
// Destroy Routes ----------------------------------------
router.delete("/:id", async (req, res) => {
  res.json(await Item.findByIdAndRemove(req.params.id));
  
});

module.exports = router