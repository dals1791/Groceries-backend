const express = require("express");
const router = express.Router();
const List = require("../models/List");
const Item = require("../models/Item")

// Index Route ------------------------------------------
router.get('/',   (req, res) => {
  List.find({}).then(allLists =>{
      res.json({
          lists: allLists
      })
  }).catch( err => {res.json({status: 400})
})
})
// Create Routes ----------------------------------------
// router.post("/", async (req, res) => {
//   res.json(await List.create(req.body));    
// });


// // Update Routes ----------------------------------------
// router.put("/:id", async (req, res) => {
//   res.json(
//     await List.findByIdAndUpdate(req.params.id, req.body, { new: true })
//   );
// });

// // Destroy Routes ----------------------------------------
// router.delete("/:id", async (req, res) => {
//   res.json(await List.findByIdAndRemove(req.params.id));
// });

module.exports = router;
