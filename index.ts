// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel"));

// app.listen(3000, () => console.log("Server ready on port 3000."));

// module.exports = app;

const express = require("express"); 
const app = express(); 
app.get("/", (req, res) => { res.send("Express on Vercel"); }); 
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
