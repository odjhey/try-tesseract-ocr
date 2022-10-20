const { exec } = require("child_process");

exec(
  "tesseract invoice-template-us-neat-750px.png stdout",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`, error, stderr);
  }
);
