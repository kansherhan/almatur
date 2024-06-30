import express from "express";
import cors from "cors";
import morgan from "morgan";

import { TursSubscriber } from "./database/models/turs_subscribers.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/create-turs-subsribers", async (request, response) => {
  try {
    console.log(request.body);
    const tur = await TursSubscriber.create(request.body);

    return response.json(tur);
  } catch (e) {
    console.error(e);
    response.status(500).send(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
