const members = require("./members.json");
const fs = require("fs");

members.forEach((it) => {
  let a3 = new Array(3);
  for (let i = 0; i < 3; i++) {
    a3[i] = Math.floor(Math.random() * 10);
  }
  let a2 = new Array(2);
  for (let i = 0; i < 2; i++) {
    a2[i] = Math.floor(Math.random() * 10);
  }
  let a4 = new Array(4);
  for (let i = 0; i < 4; i++) {
    a4[i] = Math.floor(Math.random() * 10);
  }
  it.phoneNumber = `+36 ${a2.join("")} ${a3.join("")} ${a4.join("")}`;
});

fs.writeFileSync("temp.json", JSON.stringify(members));
