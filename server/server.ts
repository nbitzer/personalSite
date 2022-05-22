import express, { Application } from 'express'
import cors = require('cors')

const app: Application = express()

// Set cors for local dev. Need a swtich statement for prod
app.use(cors())

// Define basic api route to verify server is running
app.get("/api", (req, resp) => {
    resp.json({ "testing": ["working", "not wokring"] })
})

// Start server on port 5000
app.listen(5000, () => {console.log("Server started on port 5000...")})