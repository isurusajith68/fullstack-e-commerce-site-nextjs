const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" }); // Set the destination directory for uploaded files

app.post("/api/uploads", upload.array("file"), (req, res) => {
  // Handle the uploaded files
  const files = req.files;
  console.log(files);
  // ...

  res.sendStatus(200); // Send a success response
});

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
