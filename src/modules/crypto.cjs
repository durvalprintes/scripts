const crypto = require("crypto");
const prompt = require("prompt-sync")();

const hash = (data) => crypto.createHash("md5").update(data).digest("base64");

function password() {
  const secret = "12345678";
  const pass = prompt("Qual a secret? ", { echo: "*", value: "blank" });
  return hash(secret) == hash(pass);
}

module.exports = {
  password,
};
