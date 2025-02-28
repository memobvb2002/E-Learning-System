const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({ username: String, password: String });
const ContactSchema = new mongoose.Schema({ name: String, email: String, message: String });

const User = mongoose.model("User", UserSchema);
const Contact = mongoose.model("Contact", ContactSchema);

app.post("/register", async (req, res) => {
    await User.create(req.body);
    res.json({ message: "User registered!" });
});

app.post("/login", async (req, res) => {
    const user = await User.findOne(req.body);
    res.json({ success: !!user });
});

app.post("/contact", async (req, res) => {
    await Contact.create(req.body);
    res.json({ message: "Message received!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
