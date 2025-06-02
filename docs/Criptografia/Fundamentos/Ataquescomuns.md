---
title: Ataques Comuns
sidebar_position: 4
---

import Admonition from '@theme/Admonition';

# Ataques à criptogradia

É aquilo né você pode ter escolhido o algoritmo certo, configurado as chaves direito, seguido todas as boas práticas e mesmo assim... boom. Alguém que sabe o que está fazendo quebrou sua segurança. Por quê? Porque criptografia não existe no vácuo. Ela depende de implementações, contextos, usuários, e — surpresa — todos esses fatores são atacáveis.

A maioria dos ataques criptográficos modernos não envolve quebrar a matemática base dos algoritmos(embora isso também aconteça). Eles exploram más implementações, escolhas ruins de parâmetros ou uso indevido de ferramentas.
 
 Entre os ataques mais comuns, temos: 
- Força Bruta
- Ataque de Texto Conhecido
- Ataques por Dicionário

## 1. Força Bruta

A boa e velha força bruta sem criatividade nenhuma, mas com muito tempo livre ou uma GPU top demais.

A ideia é simples: o atacante tenta **todas as combinações possíveis de chaves até encontrar a certa**. Se a chave for curta ou previsível, esse ataque pode ser surpreendentemente eficaz. Mas é aquilo, se não for ele vai ficar horas, dias, meses, até anos para quebrar, então nada de criptografias fracas ou Senhas Óbvias em.

Exemplo simples: vamos tentar quebrar uma cifra de  Cesar  básica no navegador. Deixei o código em Js já que todos já tiveram contato.

```js

function bruteForceCaesar(ciphertext) {
    const possibilities = [];
    for (let shift = 1; shift < 26; shift++) {
      const attempt = ciphertext
        .split('')
        .map(c => {
          const code = c.charCodeAt(0);
          if (code >= 65 && code <= 90) { // maiúsculas
            return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
          } else if (code >= 97 && code <= 122) { // minúsculas
            return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
          } else {
            return c;
          }
        })
        .join('');
      possibilities.push(`Shift ${shift}: ${attempt}`);
    }
    return possibilities;
  }
  
  console.log(bruteForceCaesar("Tatig ayk kyyg iolxg vgxg vxuzkpkx tgjg"));

```
Esse script tenta todas as 25 possibilidades de deslocamento da cifra de César. Se o texto for curto, você faz o resto. Isso é criptoanálise manual assistida por código — o básico.

_teste o código no seu computador._

## 2. Ataque de Texto Conhecido

Agora as coisas ficam mais sofisticadas. Suponha que o atacante tenha acesso a pares de texto claro e texto cifrado. Ele pode comparar padrões e tentar inferir a chave, o vetor de inicialização ou até falhas estruturais no algoritmo usado.

Vamos demonstrar um cenário simples com AES em modo ECB — aquele que ninguém deveria usar, mas que muita gente insiste.

---
Explicação Rápida :

**AES (Advanced Encryption Standard)** é um algoritmo de criptografia simétrica por blocos, padronizado pelo [NIST](https://www.ibm.com/br-pt/topics/nist) em 2001, para substituir o **DES**.

Características:
- Algoritmo simétrico

- Opera em blocos de 128 bits (16 bytes).

- Suporta chaves de 128, 192 ou 256 bits.

**O que é ECB (Electronic Codebook Mode)?**
ECB é o modo de operação mais simples do AES — e mais inseguro.

Como funciona?

Cada bloco de 16 bytes é cifrado independentemente com a mesma chave.

_Se dois blocos de texto plano forem iguais, seus blocos cifrados também serão iguais._ - Já viu onde vai dar né?

**Padrões se repetem no texto cifrado**. Você está escondendo os dados com AES, mas revelando a estrutura interna da mensagem.

---

Vamos usar o módulo crypto do Node.js:

```js
const crypto = require("crypto");

// Preparando duas mensagens, perceba que elas são iguais no começo e diferentes no final.
const msg1 = Buffer.from("EchoSecisveryniceeee");
const msg2 = Buffer.from("EchoSecisverynici");

const key = crypto.randomBytes(16);

// AES-128-ECB (sem IV)
function encryptECB(msg, key) {
  const cipher = crypto.createCipheriv("aes-128-ecb", key, null);
  cipher.setAutoPadding(true);
  return Buffer.concat([cipher.update(msg), cipher.final()]);
}

const ct1 = encryptECB(msg1, key);
const ct2 = encryptECB(msg2, key);

// Comparando o primeiro bloco, viu que elas mentem o mesmo código?
console.log("Bloco 1 (msg1):", ct1.slice(0, 16).toString('hex'));
console.log("Bloco 1 (msg2):", ct2.slice(0, 16).toString('hex'));
```
Se você testar esse código no seu computador, vai ver dois resultados iguais, aí vem a pergunta:

```txt

aaa Por que o código é o mesmo se o final tem 4 letras diferentes????

```

O AES-128 cifra blocos de 16 bytes. Se você passar uma mensagem de, digamos, 32 bytes, o algoritmo vai dividir em dois blocos de 16 e cifrar cada um separadamente, sem depender um do outro (porque estamos no modo ECB).

Se dois blocos de texto original forem exatamente iguais, então os blocos cifrados serão idênticos, porque:

- A chave é a mesma,

- O bloco é o mesmo,

Então no exemplo que foi dado:

```
const msg1 = Buffer.from("EchoSecisveryniceeee"); = 20 bytes
const msg2 = Buffer.from("EchoSecisverynici"); = 17 bytes

```

Se você perceber os primeiros 16 bytes são os mesmos, que é "EchoSecisverynic", logo o primeiro bloco vai com certeza ser igual.

Esse erro pode ser resolvido se você aumentar os blocos, experimente aumentar para 32 bytes:

coloca isso no final do código, ele vai pegar os próximos 16 bytes:

```js
console.log("Bloco 2 (msg1):", ct1.slice(16, 32).toString('hex'));
console.log("Bloco 2 (msg2):", ct2.slice(16, 32).toString('hex'));
```

Percebeu que mudou tudo? Os blocos serão diferentes, pois a parte final das mensagens é distinta.

Pense como bloquinhos mesmo, o primeiro bloco de 16 bytes "EchoSecisverynic" é igual nos dois, o que significa que o resultado será o mesmo, agora, se você o próximo bloco que é "eeee" e "i", vai dar um resultado completamente diferente. 

add no final do código

```js
console.log("===============");
console.log("Vamos imprimir tudo junto para ter certeza");
console.log("Cifra msg1:", ct1.toString('hex'));
console.log("Cifra msg2:", ct2.toString('hex'));
```
No final Ficou diferente né? e no começo ficou igual, tá aí o BO, já imaginou fosse uma informação sensível?


## 3. Ataques por Dicionário

"Se você acha que a sua senha é segura, experimente deixá-la num TXT no desktop."

Antes de falarmos sobre criptografia inquebrável, vamos lembrar que a maioria das falhas não vem do algoritmo, vem de quem escolheu “senha123” achando que estava abafando - Espero de Verdade que você não esteja usando nenhuma senha óbvia.

O ataque por dicionário é um dos ataques mais antigos e mais eficazes justamente por isso: ele explora a previsibilidade humana, e não a fragilidade matemática.

Em vez de tentar todas as combinações possíveis como num ataque de força bruta, o atacante usa uma lista pré-compilada de senhas prováveis: palavras do dicionário, nomes populares, senhas vazadas de outros sistemas, sequências de teclado e tudo aquilo que alguém com pressa pode ter usado como senha, as vezes até mesmo dados da própria pessoa, dependendo da sofisticação.

Essa lista é testada contra o sistema, geralmente comparando hashes de senha, até encontrar uma correspondência.

E por que funciona?

Porque as pessoas continuam usando senhas como:
```
pgsql
Copiar
Editar
123456
admin
senha123
qwerty
letmein
```

E essas senhas continuam aparecendo em vazamentos reais. Se uma dessas for usada por alguém no seu sistema, um ataque por dicionário pode descobrir a senha em segundos. E isso é mais comum do que você pensa.

Antes do código, um lembrete rápido: senhas não devem ser armazenadas em texto puro (mas muitos sistemas ainda fazem isso). Elas devem ser armazenadas como hashes criptográficos.

Mas o que é Hashing?

É uma função unidirecional: você transforma uma entrada em uma saída fixa.

Não dá pra “desfazer” um hash (na teoria).

_Exemplo de função: SHA-256._

Exemplo básico com Node.js:

```js

const crypto = require("crypto");

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

console.log(hashPassword("senha123")); // -> Hash da senha
```
Código: Vamos atacar com um dicionário
Agora imagine que você interceptou um hash durante uma auditoria de segurança (ou pior, num dump vazado). Sua missão? Descobrir qual senha gerou esse hash.

```js
const crypto = require("crypto");

// Lista de senhas que vamos testar
const dictionary = [
  "123456",
  "admin",
  "senha123",
  "letmein",
  "abc123",
  "password",
  "qwerty",
  "iloveyou",
  "dragon"
];

// Função de hash
function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

// O hash que queremos descobrir (a senha é "senha123")
const targetHash = hashPassword("senha123");

// Iniciando o ataque
for (const guess of dictionary) {
  const attemptHash = hashPassword(guess);
  console.log(`Tentando: ${guess} -> ${attemptHash}`);
  if (attemptHash === targetHash) {
    console.log(`Senha encontrada: ${guess}`);
    break;
  }
}
//Saída esperada:
//Tentando: 123456 -> 8d969eef6ecad3c29a3a629280e686cf...
//Tentando: admin -> 8c6976e5b5410415bde908bd4dee15df...
//Tentando: senha123 -> 9594f0f6dd09ff30a6f51b9e295c176c...
//Senha encontrada: senha123
```

Simples assim. O hash bateu? A senha foi descoberta.

### Melhorar o hash não resolve?

Depende. Usar SHA-256 puro, como fizemos acima, não é o ideal para senhas. Hashes rápidos (como SHA-1, SHA-256, MD5) são bons para verificar integridade de arquivos, mas são ruins para proteger senhas. Justamente porque são rápidos — e ataques de dicionário se aproveitam disso.

O ideal é usar funções de derivação de chave lentas, como:

- bcrypt

- scrypt

- PBKDF2

- Argon2

Elas aumentam o custo computacional por tentativa, tornando o ataque inviável em escala.

### E como proteger contra esse tipo de ataque?

- Use uma função de hash resistente a ataque de força bruta (não SHA-256 puro).

- Aplique um salt único por usuário. Isso impede ataques com tabelas pré-calculadas (rainbow tables).

- Limite as tentativas de login. Se alguém tentar 100 senhas por segundo, **é melhor travar o sistema.**

- Valide senhas fortes na entrada. Se o usuário quiser usar “123456”, diga algo como "~O seu animal~, tu vai se ferrar se usar isso".

- Monitore vazamentos e faça rotação de senhas em caso de incidente.

Um ataque por dicionário não é bonito. Não exige matemática avançada. Não requer conhecimento profundo de criptografia. Mas é efetivo porque ataca o elo mais fraco do sistema: o usuário tava com preguiça de pensar em uma senha decente.


## 4. Ferramentas

Você achou os exemplos em JavaScript legais? Existem ferramentas que fazem isso em escala profissional:

<Admonition type="info" title="Ferramentas">

- [Hashcat](https://hashcat.net/hashcat/): ataque de força bruta e dicionário com suporte a GPU.

- [John the Ripper](https://github.com/openwall/john): decifrador clássico, ótimo para hashes de sistemas operacionais.

- [Dcode](https://www.dcode.fr/en): o canivete suíço da análise de dados e cripto, via navegador.

- [Burp Suite](https://portswigger.net/burp/documentation/desktop/getting-started/download-and-install): para interceptar, modificar e testar requests web — incluindo payloads criptografados.

- [Wireshark](https://www.wireshark.org/): quando você quer ver os dados antes ou depois da cifragem.

</Admonition>

Essas ferramentas não são só "de hackers". São de analistas de segurança ofensiva e defensiva. Se você quer trabalhar com cibersegurança, precisa dominá-las. 

Dito isso, não vai ter exercício, boa sorte estudando elas.