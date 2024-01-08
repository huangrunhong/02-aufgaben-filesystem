const data = require("./data.json");

const fs = require("fs");

const fileName = "myData.txt";

const content = data
  .map((item) => item.id + " - " + item.title + "\n" + item.description)
  .join("\n\n");

fs.writeFile(`./${fileName}`, content, function (err) {
  if (err) {
    console.log("Umwandelung klappt nicht");
  }
  console.log("done");
});
