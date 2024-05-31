const express = require("express");
const cors = require('cors');

const app = express();
require("dotenv").config();
require("./config/dbConfig");

const portfolioRoute = require("./routes/portfolioRoute");

app.use(cors({
    origin: 'https://sundar-utkarsh.onrender.com'
}));

app.use(express.json());

app.use("/api/portfolio" , portfolioRoute);


// const path = require("path");

// if(process.env.NODE_ENV === "production")
// {
//   app.use(express.static(path.join(__dirname, "client/build")));
//   app.get("*", (req, res)=>{
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
//   });
// }

app.listen(process.env.PORT, () => console.log(`server running on port: ${process.env.PORT}`));