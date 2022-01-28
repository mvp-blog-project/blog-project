const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.post("/create/blog", itemController.post);
router.get("/blogs",itemController.selectAll);
router.delete("/delete/poste",itemController.remove);
router.put("/update/poste",itemController.update);
module.exports= router;
