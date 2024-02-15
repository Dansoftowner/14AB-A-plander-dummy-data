const msgs = require("./chatMessages.json");
const members = require("./members.json");
const associations = require("./associations.json");

msgs.forEach((it) => {
  let m = retrieveMember(it.association.$oid);
  while (!m) {
    const a = associations[Math.floor(Math.random() * associations.length)];
    m = retrieveMember(a._id.$oid);
  }

  it.sender = {
    _id: m._id,
    name: m.name,
  };
});

const fs = require("fs");

fs.writeFileSync("temp.json", JSON.stringify(msgs));

function retrieveMember(association) {
  const membersOfAssociation = members.filter(
    (it) => it.association.$oid === association
  );

  return membersOfAssociation[Math.floor(Math.random() * members.length)];
}
