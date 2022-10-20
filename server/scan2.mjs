import { execa } from "execa";

const { stdout } = await execa("tesseract", [
  "invoice-template-us-neat-750px.png",
  "stdout",
]);

console.log(stdout);
