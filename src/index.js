import express from "express";
import { signin } from "./routes/signin.js";
import { signup } from "./routes/signup.js";

console.log("app starting..")
const app = express();
const port = 3004;
app.get('/', (req, res)=>{
    res.send("app to create sign in functionality")
})

app.use('/signin', signin);
app.use('/signup', signup);

app.listen(port, ()=>{
    console.log(`signup appp listening on port ${port}`);
})
