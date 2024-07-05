import express from "express";
import path from "node:path";
import "dotenv/config";
import { userRouter } from "../router/user";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.disable("x-powered-by");
app.set("view engine", "ejs");

app.use("/", userRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
