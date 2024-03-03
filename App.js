const express = require("express");
const cors =require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

const userRoutes = require("./Routes/UserRoutes");
app.use('/user', userRoutes);

const expenseRoutes = require("./Routes/ExpenseRoutes");
app.use('/expense',expenseRoutes);


mongoose.connect("mongodb+srv://jenisha1154:Jenisha1154@cluster0.djac5sg.mongodb.net/Expensemanager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("error..",err);
})



app.listen(PORT, () => {
    console.log("server started on port 3001");
  }); 