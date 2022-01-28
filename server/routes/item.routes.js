const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.post("/create/blog", itemController.post);
router.get("/blogs",itemController.selectAll)
module.exports= router;
