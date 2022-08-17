import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "hello 🖐️" });
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
