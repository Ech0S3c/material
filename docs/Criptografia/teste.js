const crypto = require("crypto");

const secret = "SegredoInternoMuitoSigiloso"; // conteúdo desconhecido pelo atacante
const key = crypto.randomBytes(16);

// Função que o servidor expõe
function encryptionOracle(input) {
  const fullMessage = Buffer.from(input + secret);
  const cipher = crypto.createCipheriv("aes-128-ecb", key, null);
  cipher.setAutoPadding(true);
  return Buffer.concat([cipher.update(fullMessage), cipher.final()]);
}


function discoverFirstByte() {
    const blockSize = 16;
    const base = "A".repeat(blockSize - 1); // 15 As
    const targetBlock = encryptionOracle(base).slice(0, blockSize).toString("hex");
  
    for (let i = 32; i < 127; i++) { // ASCII imprimíveis
      const guess = base + String.fromCharCode(i);
      const guessBlock = encryptionOracle(guess).slice(0, blockSize).toString("hex");
  
      if (guessBlock === targetBlock) {
        console.log(`Primeiro byte do segredo encontrado: ${String.fromCharCode(i)}`);
        return;
      }
    }
  }
  
  discoverFirstByte();
  