const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("this is products route");
})

module.exports = router;