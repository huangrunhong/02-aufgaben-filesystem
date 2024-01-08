const fs = require("fs");

const folderName = "myFolder";

fs.mkdir(`./${folderName}`, (err) => {
  if (err) {
    return console.log("folder not successfully");
  }
  console.log("done");
});

const workFile = (file) => {
  if (fs.existsSync(file)) {
    console.log("Datei ist schon da");
  } else {
    fs.writeFile(`./myFolder/${file}`, file + "\n", (err) => {
      if (err) {
        return console.log(`datei ${file} ist nicht angelegt`);
      }
      console.log(`datei ${file} ist fertig angelegt`);
    });
  }
};

workFile("myFile.txt");

workFile("HelloBackend");
