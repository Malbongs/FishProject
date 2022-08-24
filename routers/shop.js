const express= require("express");
const router = express.Router();
router.get("/",(req,res)=>{
    res.render('shop');
});
router.get("/fish/:id",(req,res)=>{
    res.sendFile(`/Users/woo/Desktop/code/codingonproject/FishProject/static/image/fishes/${req.params.id}.jpg`);
});
router.get("/:item",(req,res)=>{
    const item = req.params.item;
    res.render(`${item}`);
});
router.get("/:item/:id",(req,res)=>{
    const id = req.params.id;
    res.render(`${id}`);
});

router.get("/basket",(req,res)=>{
    res.render('basket');
});
router.get("/myhome",(req,res)=>{
    res.render("myhome");
});

module.exports = router;
