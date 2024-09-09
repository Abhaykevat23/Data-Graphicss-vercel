//start from 42 video of code with harry......
const connectToMongo=require('./db');
const express = require('express')
const cors = require('cors')

connectToMongo();
const app = express()
const port = 5000
app.use(express.json());

app.use(cors(
  {
    origin : ["https://data-graphicss-vercel.vercel.app"],
    methods : ["GET","POST"],
    credentials : true
  }
));

//routes
app.get("/",(req,res)=>{
  res.json("Hello , Welcome to Data Graphicss.")
})
app.use('/api/auth',require('./routes/auth'))
app.use("/email", require("./routes/emailRoutes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
