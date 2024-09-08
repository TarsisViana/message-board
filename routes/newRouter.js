const { Router } = require('express');

const router = Router();

//get request display the form
router.get('/', (req, res, next) => {
  res.render('newMessage')
})

router.post('*', (req, res, next) => {
  
})