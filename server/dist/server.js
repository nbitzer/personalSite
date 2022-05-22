"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const app = (0, express_1.default)();
// Set cors for local dev. Need a swtich statement for prod
app.use(cors());
// Define basic api route to verify server is running
app.get("/api", (req, resp) => {
    resp.json({ "testing": ["working", "not wokring"] });
});
// Start server on port 5000
app.listen(5000, () => { console.log("Server started on port 5000..."); });
//# sourceMappingURL=server.js.map