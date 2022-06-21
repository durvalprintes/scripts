import { writeFileSync } from "fs";

function encode(plain) {
  const encoded = Buffer.from(plain, "utf8").toString("base64");
  writeFileSync("src/data/encoded.txt", encoded);
  return encoded;
}

function decode(encoded) {
  const plain = Buffer.from(encoded, "base64").toString("utf8");
  writeFileSync("src/data/plain.txt", plain);
}

export { encode, decode };
