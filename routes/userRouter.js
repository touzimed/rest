const express=require('express');
const router=express.Router()
const {deleteUser,updateUser,addUser,getUser}=require('../controllers/userControlles')
 router.get('/',getUser)
 router.post('/post',addUser)
 router.put('/post/:id',updateUser)
 router.delete('/post/:id',deleteUser)


module.exports=router