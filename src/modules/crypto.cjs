const crypto = require("crypto");
const prompt = require("prompt-sync")();

const hash = (data) => crypto.createHash("md5").update(data).digest("base64");

function guess(secret) {
  let hit = false;
  const attempts = prompt("How many attempts? ", { value: 1 });
  for (let attemtp = 0; !hit && attemtp < attempts; attemtp++) {
    hit = hash(secret) == hash(prompt("Whats the secret? ", { echo: "*" }));
  }
  return hit;
}

module.exports = {
  guess,
};
