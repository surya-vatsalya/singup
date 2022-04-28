import express from "express";
import { signin } from "./routes/signin.js";
import { signup } from "./routes/signup.js";

const app = express();
const port = 3001;
app.get('/', (req, res)=>{
    res.send("app to create sign in functionality")
})

app.use('/signin', signin);
app.use('/signup', signup);

app.listen(port, ()=>{
    `signup appp listening on port ${port}`;
})
