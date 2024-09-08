import express from 'express';
import path from 'path';
//fix __dirname ES module scope
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

//import routes
import indexRouter from './routes/indexRouter.mjs';
import newMessageRouter from './routes/newRouter.mjs';

//iniciate app
const app = express();

//setup ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const PORT = process.env.port || 3000;

//parse the formdata into req.body
app.use(express.urlencoded({ extended: true }));


//link the routes
app.use('/', indexRouter);
app.use('/new', newMessageRouter)


app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
})