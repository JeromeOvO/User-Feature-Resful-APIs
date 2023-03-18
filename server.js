const express = require("express");
const e = require("express");
const app = express();
let bcrypt = require("bcryptjs");
const constants = require("constants");

app.use(express.json());

//local database
const users = []

//track the current user
let currentUser = {
    name:""
}

app.get('/users', (req, res) => {
    res.json(users);
})


//register
app.post('/users/register', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        console.log(salt);
        console.log(hashPassword);
        const user = {
            name:req.body.name,
            password: hashPassword,
            age:req.body.age,
            phoneNumber:req.body.phoneNumber
        }
        users.push(user);
        res.status(201).send();
    }
    catch {
        res.status(500).send();
    }
})

//login
app.post('/users/login', async (req, res)=>{
    const user = users.find(user => user.name === req.body.name);
    if(user == null){
        return res.status(400).send("Cannot find user");
    }

    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            currentUser.name = user.name;
            res.send("Login Success");
        }
        else{
            res.send("Login Failed");
        }

    }
    catch {
        res.status(500).send();
    }
})

//retrieve information
app.get('/users/information', async (req, res)=>{
    const user = users.find(user => user.name === currentUser.name)
    if(user == null){
        return res.status(400).send("Cannot access user information or need login");
    }

    try{
        res.json(user);
    }
    catch {
        res.status(500).send();
    }
})

app.listen(3000);