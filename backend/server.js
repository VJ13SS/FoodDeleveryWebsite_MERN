import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";

//app config
const app = express();
const PORT = 4000;

//middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDB();

//api end points
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))



app.get("/", (req, res) => {
  res.send("Hello world..!VJ 13 SS");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
