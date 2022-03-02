import "./database";
import "reflect-metadata";

import bodyParser from "body-parser";
import multipart from "connect-multiparty";
import cors from "cors";
import express from "express";

import { routes } from "./routes";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const multipartMiddleware = multipart({ uploadDir: "./uploads" });
app.post("/uploads", multipartMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ messages: files });
});

app.use((err, req, res, next) => res.json({ error: err.message }));

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log("Server running on port 3000"));
