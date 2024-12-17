const { constants } = require("crypto");
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
// app.use((req, res) => {
//     console.log(req.method); // Logs the HTTP method
//     });

// app.use((req, res) => {
//     console.log(req.path); // Logs '/about' from '/about?user=1'
//     });

// app.use((req, res) => {
//     console.log(req.protocol); // 'http' or 'https'
//     });

// app.use((req, res) => {
//     console.log(req.ip); // Logs the client's IP address
//     });

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
    const { username, password, name, age } = req.query;
    if (users[username] && users[username] === password) {
    req.session.user = username;
    req.session.userName = username;
    req.session.age = age;
    req.session.name = name;

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
    // http://localhost:3000/login?username=user1&password=password1&name=frank&age=31


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
res.json({ message: `Hello, ${req.session.user}. Welcome to your profile page. You are ${req.session.age} years old. Your name is ${req.session.name}.`, session: req.session.user, jwt: token });
} else {
res.status(401).send("Please log in to view this page.");
}
});

app.get("/search", (req, res) => {
    console.log(req.query); // { term: 'express' }
    });
// example: GET /search?term=express
//get argument from client

app.get("/user/:id", (req, res) => {
    console.log(req.params); // { id: '123' }
    });


app.get("/headers", (req, res) => {
    console.log(req.headers["user-agent"]); // Logs the browser or tool used
    });

app.get("/hello", (req, res) => {
    const userName = req.query['name'];
    if (typeof userName !== 'string' || userName.trim() === '') {
        res.json({ message: `hello person without name`});
    } else {
        res.json({ message: `hello ${userName}.`});
    }
    });

    app.get("/hello", (req, res) => {
    const userName = req.query['name'];
    console.log(typeof userName)
    if (typeof userName !== 'string' || userName.trim() === '') {
        res.json({ message: `hello person without name`});
    } else {
        res.json({ message: `hello ${userName}.`});
    }
    });
app.get("/goodbye", (req, res) => {
    const userName = req.query['name'];
    console.log(typeof userName)
    if (typeof userName !== 'string' || userName.trim() === '') {
        res.json({ message: `goodbye person without name`});
    } else {
        res.json({ message: `goodbye ${userName}.`});
    }
    });




app.get("/sumtwo", (req, res) => {
    const integerOne = parseInt(req.query['one'])
    const integerTwo = parseInt(req.query['two'])
    const sum =  integerOne+integerTwo
    console.log(sum);
    if (sum) {
        console.log(sum);
        res.json({ message: `the sum of, ${integerOne} and ${integerTwo} is ${sum}.`});
        } else {
            res.json({ message: `you did not enter two valid integers to sum.`});
        }

    });

// example: http://localhost:3000/sumtwo?one=13&two=21
//get argument from client


// Start the server
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});

