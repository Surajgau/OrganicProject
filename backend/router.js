import express from 'express'
import {  deleteUser, fBP, fid, login, signup } from './controller.js';

export const router=express.Router();
router.post("/signup",signup);
router.post("/login",login);
router.get("/fbp/:email",fBP)
router.get("/fid",fid);
router.delete("/deleteUser/:datahhhhh",deleteUser)
