const express=require('express');
const {User}=require('../models/user');
const router=express.Router();

router.post('/',async (req,res)=>{
    try{
        let user=new User(req.body);
        user=await user.save();
        console.log('post successful');
        res.status(200).send(user);
    }
    catch(err){
        console.log(err);
        res.status(500).send('server error');
    }
})

router.get('/',async (req,res)=>{
    try{
        let user=await User.find();
        console.log('get successful');
        res.status(200).send(user);
    }
    catch(err){
        console.log(err);
        res.status(500).send('server error');
    }
})

router.put('/',async(req,res)=>{
    try{
        let user=await User.findByIdAndUpdate(req.query.id,req.body);
        console.log('update successful');
        res.status(200).send(user);
    }
    catch(err){
        console.log(err);
        res.status(500).send('server error');
    }
})
router.delete('/',async (req,res)=>{
    try{
        let user=await User.findByIdAndDelete(req.query.id);
        console.log('delete successful');
        res.status(200).send(user);
    }
    catch (err){
        console.log(err);
        res.status(500).send('server error');
    }
})
router.get('/get-row',async (req,res)=>{
    try{
        let user=await User.findOne({_id:req.query.id});
        console.log(user);
        res.status(200).send(user);
    }
    catch (err){
        console.log(err);
        res.status(500).send
    }
})
module.exports=router;