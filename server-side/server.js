import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
  const conn = await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('db connected')
}

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create User
server.post('/user',async (req,res)=>{
    console.log(req.body);
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

// CRUD - Create User
server.post('/home', async (req, res) => {
    try {
        const userId = req.body.userid;
        const user = await User.findOne({ username: userId });
        if (user) {
            console.log('User exists:', user);
            res.json({ exists: true });
        } else {
            console.log('User does not exist');
            res.json({ exists: false }); 
        }
    } catch (error) {
        console.error('Error checking user existence:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

server.get('/user',async (req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

server.listen(8080,()=>{
    console.log('server started')
})