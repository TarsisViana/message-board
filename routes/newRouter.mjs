import { Router } from 'express';

import {
  addMessage
  
 } from './indexRouter.mjs';
const router = Router();

//get request display the form
router.get('/', (req, res, next) => {
  res.render('form')
})

router.post('/', (req, res, next) => {
  addMessage({
    text: req.body.messageText,
    user: req.body.name,
    added: new Date()
  });
  res.redirect('/');
})

export default router;