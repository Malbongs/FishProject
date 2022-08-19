const express= require("express");
const router = express.Router();
router.get("/",(req,res)=>{
    res.render('shop');
});
router.get("/:item",(req,res)=>{
    const item = req.params.item;
    res.render(`${item}`);
});
router.get("/:item/:id",(req,res)=>{
    const id = req.params.id;
    res.render(`${id}`);
});



module.exports = router;
