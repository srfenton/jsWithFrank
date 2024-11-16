const express = require("express");
const session = require("express-session");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;
const JWT_SECRET = "myJWTSecretKey"; // Change this to a secure key for JWT signing

// Configure the session middleware
app.use(
session({
secret: "mySecretKey", // Change this to a secure key for sessions
resave: false,
saveUninitialized: true,
cookie: { maxAge: 60000 }, // Session expiration time in milliseconds (1 minute here)
})
);

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple "database" of users for demonstration purposes
const users = {
user1: "password1",
user2: "password2",
};

// Route to get the session and JWT data
app.get("/", (req, res) => {
if (req.session.user) {
const token = jwt.sign({ user: req.session.user }, JWT_SECRET, { expiresIn: "1h" });
res.send(`Hello, ${req.session.user}. You are logged in. JWT: ${token}`);
} else {
res.send("You are not logged in.");
}
});

// Login route
app.get("/login", (req, res) => {
    const { username, password } = req.query;
    if (users[username] && users[username] === password) {
    req.session.user = username;
    const token = jwt.sign({ user: username }, JWT_SECRET, { expiresIn: "1h" });
    res.json({
    message: `Welcome, ${username}. You are now logged in!`,
    session: req.session.user,
    jwt: token,
    });
    } else {
    res.status(401).send("Invalid credentials. Please try again.");
    }
    });
    // http://localhost:3000/login?username=user1&password=password1


// Logout route
// app.post("/logout", (req, res) => {
// req.session.destroy((err) => {
// if (err) {
// return res.status(500).send("Error logging out.");
// }
// res.send("You are logged out.");
// });
// });

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
    if (err) {
    return res.status(500).send("Error logging out.");
    }
    res.send("You are logged out.");
    });
    });


// Route to check if the user is logged in
app.get("/profile", (req, res) => {
if (req.session.user) {
const token = jwt.sign({ user: req.session.user }, JWT_SECRET, { expiresIn: "1h" });
res.json({ message: `Hello, ${req.session.user}. Welcome to your profile page.`, session: req.session.user, jwt: token });
} else {
res.status(401).send("Please log in to view this page.");
}
});

// Start the server
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});

