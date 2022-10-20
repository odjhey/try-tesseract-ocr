import express from "express";
import cors from "cors";
import fs from "node:fs";
import { execa } from "execa";

const app = express();
app.use(express.text({ type: "*/*", limit: "50mb" }));
app.use(cors());

app.use("/uploads", async (req, res, next) => {
  const body = req.body;

  console.log(body);
  const buffer = Buffer.from(
    body.replace("data:image/png;base64,", ""),
    "base64"
  );
  fs.writeFileSync("out/new-path.png", buffer);

  const { stdout } = await execa("tesseract", ["out/new-path.png", "stdout"]);

  try {
    res.status(200).json({ message: stdout });
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
});

const PORT = 5999;
app.listen(PORT, () => {
  console.log("listening at port " + PORT);
});
