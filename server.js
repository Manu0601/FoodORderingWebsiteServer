import express from "express";
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser";
import { apiRouter } from "./routes/version_1/index.js";

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cookieParser());

app.use("/api",apiRouter)
const db = connectDb;
db();
app.listen(port, () =>
  console.log(`Server running on port: http://localhost:${port}`)
);

app.all("*", (req, res) => {
  res.status(404).json({ message: "end point does not exist" });
});
