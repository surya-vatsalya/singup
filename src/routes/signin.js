import express from "express";
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("This is signin page");
})

export {router as signin}