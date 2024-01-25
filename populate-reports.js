const reports = require("./reports.json");

reports.forEach((report) => {
  report.purpose = [
    "Rendezvénybiztosítás",
    "Iskolaszolgálat",
    "Jelző-Figyelő járőrözés",
    "Gépjárműfelderítés",
    "Postáskísérés",
  ][Math.ceil(Math.random() * 5)];
});

console.log(JSON.stringify(reports));
