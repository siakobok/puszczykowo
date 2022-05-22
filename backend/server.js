import express from 'express';
//import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});



//status(404).send({ message: 'Product Not Found' });
// res.send(product);

//app.get("/cart/:id?" , (req, res) => {
 // res.send('dddd');
//});





app.use('/api/users', userRouter);
app.use('/api/products', productRouter);


app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});