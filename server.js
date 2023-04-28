import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
//importing routes
import teaRoutes from './routes/teaRoutes.js';

//adding our environment variables to our process.env
dotenv.config();

const app = express();
//Allows us to send JSON information to the server (parse the HTTP body convert the JSON string into javascript object) ==> as a consequence we have access to our data in req.body
app.use(express.json());

//connect to the database using our process.env variables
mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

//configure routes 
app.use('/api/teas', teaRoutes);

app.listen(3001, ()=> {
    console.log("The server is listening for requests...")
});