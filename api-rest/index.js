import "dotenv/config";
import http from "http";
import app from "./app.mjs";

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
);
