const express = require('express');
const mongoose = require('mongoose');
const cookiesParser=require('cookie-parser')
const cors = require('cors');
app.use(cors());


const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const Port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookiesParser());

app.listen(Port, () => {
    console.log('Server is Running....')
})

app.get('/', (req, res) => {
  res.send('API is running...');
});
<<<<<<< HEAD
=======
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend.netlify.app'],
  credentials: true
}));

>>>>>>> 2af541d6cb374e3c64fdbb6e00248207794eceec

app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/productRouter'))
app.use('/api', require('./routes/fashionRouter'))
app.use('/api', require('./routes/uploadRouter'))

//Connect MongoDB

const uri = process.env.URI;
//console.log("Env",process.env.URL)
mongoose.connect(uri, {
    //  useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Connected to MongoDB');
}).catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
})

