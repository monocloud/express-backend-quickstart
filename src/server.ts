import "dotenv/config";
import express from "express";
import {
  protectApi,
  type AuthenticatedExpressRequest,
} from "@monocloud/backend-node/express";

const app = express();
const protect = protectApi();

app.use(express.json());
app.use(protect());

app.get("/api/protected", (req, res) => {
  const { claims } = req as AuthenticatedExpressRequest;

  res.json({
    message: "Protected endpoint",
    claims,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
