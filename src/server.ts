import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "./routes";
import multer from "multer";
import path from "path";
import cors from "cors";

const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send("Servidor rodando. Acessar a partir de '/categories ou '/products'");
});

app.post("upload", upload.single("file"), (req, res) => {
  res.send("Arquivo recebido");
});

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Server running on port 3000"));
