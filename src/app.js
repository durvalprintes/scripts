import { readFileSync } from "fs";
import { encode, decode } from "../src/modules/convert.js";

try {
  let text = readFileSync("src/data/entrada.txt", "utf8");
  text += "\nNumber: ".concat(Math.floor(Math.random() * 101));
  console.log(text);
  decode(encode(text));
} catch (erro) {
  console.log(erro);
}
