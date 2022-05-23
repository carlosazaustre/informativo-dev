import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : /informativo\.dev$/,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/hello", (req, res) => {
  res.send("Hello Moto!");
});

export default app;
