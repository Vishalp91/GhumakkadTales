import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config.js';
import { postRoutes } from './routes/postRoutes.js';
import { userRoutes } from './routes/userRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';

// Resolving dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

//Use Frontend App
app.use(express.static(path.join(__dirname, '/frontend/dist')));

//Render Client for any path 
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/frontend/dist/index.html')));

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
