
import express from "express";
import cors from "cors"
import pool from "./db.js"

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        await pool.query(
            `INSERT INTO contacts
            (name, email, phone, message)
            VALUES ($1, $2, $3, $4)`,
            [name, email, phone, message]
        );

        res.status(200).json({
            success: true,
            message: "Message sent successfully"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});