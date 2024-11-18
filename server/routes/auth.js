// import express from 'express';
const express = require('express');
// import { register, generateOpt, verifyOtp } from '../controller/auth.js';
const { register, generateOtp, verifyOtp } = require('../controller/auth.js');

const router = express.Router();

//register
router.post('/register', register);

//generate
router.post('/generate-otp', generateOtp);

//verify otp
router.post('/verify-otp', verifyOtp);

// export default router;
module.exports = router;
