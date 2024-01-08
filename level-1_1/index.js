const { error, dir } = require("console");
const fs = require("fs");

const content = "Ich bin ein Webdeveloper";

// content einfügen
fs.writeFile("./blog1.txt", content, (err) =>
  err ? console.log("error") : console.log("file written successfully")
);

// Überprüfe eine Ordner, wenn es gibt, löschen es
fs.access("./assets", dir, (err) => {
  if (err) {
    console.error("assets exists not");
  } else {
    fs.rm(dir, { recursive: true, force: true }, (err) => {
      if (err) {
        return console.log("err");
      }
    });
  }
});

// erstelle einen Ordner
const folderName = "assets";
fs.mkdir(`./${folderName}`, (err) => {
  if (err) {
    return console.log("konnte den ordner assets nicht anlegen");
  }
  console.log("successfully create a folder");
});

// Überprüfe eine Datei, wenn es gibt, löschen es
if (fs.existsSync("delete.txt")) {
  fs.rmSync("delete.txt", {
    force: true,
  });
}

// erstelle eine Datei "delete.txt"
const fileName = "delete.txt";
fs.writeFile(`./assets/${fileName}`, "", (err) => {
  if (err) {
    return console.log("datei ist nicht angelegt");
  }
  console.log("datei ist fertig angelegt");
});

// erstelle eine Datei "Hello.txt"
const fileName2 = "Hello.txt";
fs.writeFile(`./assets/${fileName2}`, "Hello Friends", (err) => {
  if (err) {
    return console.log(`datei ${fileName2} ist nicht angelegt`);
  }
  console.log(`datei ${fileName2} ist angelegt`);
});

// Rename eine Datei HelloWorld.txt
fs.rename("./assets/Hello.txt", "./assets/HelloWorld.txt", (err) => {
  if (err) {
    return console.log("rename nicht funktioniert");
  }
  console.log("Rename fertig!");
});
