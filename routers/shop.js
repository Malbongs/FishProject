const express= require("express");
const router = express.Router();
router.use((req,res,next)=>{
    console.log(req.url);
    next();
});
router.get("/:item",(req,res)=>{
    console.log("hello");
    const item = req.params.item;
    res.render(`${item}`);
});
router.get("/:item/:id",(req,res)=>{
    const id = req.params.id;
    res.render(`${id}`);
});



module.exports = router;
