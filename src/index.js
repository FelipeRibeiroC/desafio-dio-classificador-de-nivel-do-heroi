let nomeDoHeroi = "Felipe";
let expDoHeroi = 9560;

let nivelDoHerói;

if (expDoHeroi <= 1000) {
  nivelDoHerói = "Ferro";
} else if (expDoHeroi >= 1001 && expDoHeroi <= 2000) {
  nivelDoHerói = "Bronze";
} else if (expDoHeroi >= 2001 && expDoHeroi <= 5000) {
  nivelDoHerói = "Prata";
} else if (expDoHeroi >= 5001 && expDoHeroi <= 7000) {
  nivelDoHerói = "Ouro";
} else if (expDoHeroi >= 7001 && expDoHeroi <= 8000) {
  nivelDoHerói = "Platina";
} else if (expDoHeroi >= 8001 && expDoHeroi <= 9000) {
  nivelDoHerói = "Ascendente";
} else if (expDoHeroi >= 9001 && expDoHeroi <= 10000) {
  nivelDoHerói = "Imortal";
} else {
  nivelDoHerói = "Radiante";
}

console.log("O Herói " + nomeDoHeroi + " está no nível " + nivelDoHerói);
