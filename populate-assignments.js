const assignments = require("./assignments.json");
const members = require("./members.json");

assignments.forEach((it) => {
  it.assignees.forEach((it) => {
    it.name = members.find((m) => m._id.$oid == it._id.$oid).name;
  });
});

console.log(JSON.stringify(assignments));
