import express from 'express'; 
import cors from 'cors'; 
import bodyParser from 'body-parser'; 
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';


const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('APP IS RUNNING!')
})

dotenv.config();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));
