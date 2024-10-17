import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { Ratelimit } from "@unkey/ratelimit";
dotenv.config();
const unkey = new Ratelimit({
  namespace: "email.inbound",
  limit: 2,
  duration: "30s",
  rootKey: process.env.UNKEY_ROOT_KEY,
});

// Load environment variables from .env file

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

async function rateLimitMiddleware(req, res, next) {
  try {
    const identifier = req.body.userID;

    const ratelimit = await unkey.limit(identifier);
    if (!ratelimit.success) {
      return res.status(429).send("Too many requests. Please try again later.");
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
}

// A sample API route that is limited by Unkey
app.post("/api/hello", rateLimitMiddleware, (req, res) => {
  try {
    res.send({ message: "Hello from Unkey API!" });
  } catch (error) {
    console.log("here", error);
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
