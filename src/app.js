import express from "express"
import {pool} from  "./db.js"
import {PORT} from "./config.js"

const app = express()

app.get("/",async(req,res)=>{

    const [result] = await pool.query('SELECT * FROM users')

    res.json(result)

})


app.get("/ping", async(req,res)=>{
    
    
    const [result] = await pool.query( 'SELECT "HELLO WORLD" as RESULT');
    res.json(result[0])
    res.send("Conectado con base de datos")

})

app.get("/create", async(req,res)=>{
    
    const result =await pool.query('INSERT INTO users(name) VALUES("JOHN")')
    res.json(result)

})







app.listen(PORT)

console.log("server on port" ,PORT)



