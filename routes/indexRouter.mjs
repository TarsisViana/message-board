import { Router } from 'express';


const router = Router();

//inicial messagesg
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

//inicial get request display the messages
router.get('/', (req, res, next) => {
  res.render(
    'index',
    {
      title: "Mini Messageboard",
      messages: messages
    });
})


export default router;