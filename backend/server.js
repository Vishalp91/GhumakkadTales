import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config.js';
import { postRoutes } from './routes/postRoutes.js';
import { userRoutes } from './routes/userRoutes.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

main()
.then(() => {
    console.log("connection successful");
    app.listen(port, () => {
        console.log(`Server is listening on port : ${port}`);
    });
})
.catch(err => console.log(err));


async function main() {
  await mongoose.connect(process.env.DB_URL);
}
