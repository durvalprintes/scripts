import { readFileSync, writeFileSync } from "fs";

try {
  const entrada = readFileSync("entrada.txt", "utf8");
  let saida = entrada + " World!\n";
  saida += "Random number: ".concat(Math.floor(Math.random() * 101));
  writeFileSync("saida.txt", saida, "utf8");
} catch (erro) {
  console.log(erro);
}
