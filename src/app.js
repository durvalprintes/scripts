import { readFileSync } from "fs";
import { encode, decode } from "../src/modules/convert.js";
import { guess } from "./modules/crypto.cjs";

try {
  let text = readFileSync("src/data/entrada.txt", "utf8");
  text += "\nNumber: ".concat(Math.floor(Math.random() * 101));
  console.log(text);
  decode(encode(text));
  console.log("-----------");
  console.log(guess("123456") ? "GRANTED" : "DENIED");
} catch (erro) {
  console.log(erro);
}
