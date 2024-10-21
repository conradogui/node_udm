const fs = require("fs");

fs.readFile("arquivo.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
