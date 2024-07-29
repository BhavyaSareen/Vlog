import express from "express"
import dotenv from 'dotenv';
import mysql from "mysql2"
import cors from "cors"

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Create a MySQL connection pool
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

app.get("/", (req, res) => {
    res.json("Helloo")
})

app.get("/books", (req, res) => {
    const q = "Select * from books";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO BOOKS (`title`, `desc`, `cover`) VALUES (?)"
    const values = [
        // "title  from backend",
        // "description  from backend",
        // "cover  from backend"
        req.body.title,
        req.body.desc,
        req.body.cover
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(5000, () => {
    console.log("Started");
})






