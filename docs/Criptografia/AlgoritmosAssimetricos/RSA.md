---
title: RSA
sidebar_position: 2
---

import Admonition from '@theme/Admonition';

# RSA 

Você já conhece o RSA(Rivest, Shamir e Adleman). É a criptografia de chave pública mais utilizada.
Está nos livros, nas provas, nos firewalls e nos certificados digitais.

Mas o que talvez ainda não tenha ficado claro é o seguinte:

_O RSA é menos seguro do que parece, se usado do jeito errado._

E aqui vamos abrir essa caixa preta, entender sua mecânica, e principalmente, os buracos que ela pode ter se você não prestar atenção.

## 1. Como o RSA funciona?

O RSA é baseado em um problema simples de enunciar e difícil de resolver:

_“Me diga quais são os dois números primos que multiplicados formam n.”_

Essa é a base. Escolhe-se dois primos p e q, calcula-se n = p * q, e define-se uma chave pública (e, n) e uma chave privada (d, n).

A operação é:

```txt
c = m^e mod n    → cifragem
m = c^d mod n    → decifragem
```

Parece seguro? É.

Mas tem um porém: a operação m^e mod n é determinística.

Ou seja: **mesma entrada, mesma saída. Sempre.**

## 2. O perigo do RSA cru
Criptografar diretamente uma mensagem com RSA é como enviar uma carta trancada com um cadeado... mas com a combinação escrita no verso.

Se você usar RSA(m) sem nenhum tipo de aleatoriedade ou estrutura, você revela padrões. Pior: **pode facilitar ataques matemáticos diretos.**

Por isso, entraram em cena os paddings criptográficos — estruturas adicionadas antes da cifragem para introduzir entropia e proteger contra ataques estruturais.

### 2.1 PKCS#1 v1.5 — o primeiro escudo

O padrão PKCS#1 v1.5 foi criado para resolver exatamente esse problema.

Ele basicamente diz o seguinte

```"Antes de cifrar, adicione bytes aleatórios e uma estrutura padronizada à mensagem."```

Isso protege contra ataques que dependem da repetição ou previsibilidade da entrada.

Mas aqui entra a história de um ataque que virou lenda: **o Bleichenbacher Attack.**

Em 1998, Daniel Bleichenbacher mostrou que, mesmo com padding, respostas levemente diferentes do servidor TLS permitiam realizar um ataque de oráculo.

**Como?**

- O atacante mandava milhares de mensagens malformadas.

- Observava se o servidor respondia com erro de padding, erro genérico, ou nada.

- A partir disso, refinava a entrada até reconstruir o conteúdo da mensagem original.

- O resultado: extração da chave ou mensagem completa, sem conhecer a chave privada.

Esse ataque foi devastador, entçao Não basta a matemática ser boa. A implementação precisa ser fechada hermeticamente.

### 2.2 OAEP — Padding moderno com prova de segurança

O Optimal Asymmetric Encryption Padding (OAEP) virou o novo padrão no PKCS#1 v2.0.

Ele mistura a mensagem com hashes, máscaras aleatórias e estrutura rígida, dificultando qualquer inferência matemática. É o que você deve usar hoje se for usar RSA para cifragem, claro.

### 2.3 Håstad — A cripto que falha se você repetir

Outro ataque clássico é o de Håstad, que se baseia em um erro recorrente:

Enviar a mesma mensagem para várias pessoas com o mesmo expoente e, mas com chaves públicas diferentes.

Se e for pequeno (como 3), e a mesma m for cifrada para n₁, n₂, n₃, então com o Teorema Chinês dos Restos, o atacante pode:

- Reconstruir m^e mod N (onde N = n₁ * n₂ * n₃)

- Tirar a raiz e-ésima inteira de m^e, obtendo m.

- Ou seja: ele quebrou tudo sem precisar fatorar nada.

- Isso prova que usar **RSA sem aleatoriedade é pedir para ser quebrado.**

## 3. Informações  importantes sobre o RSA

- RSA não é cifra de mensagem **é cifra de segredo curto (tipo chave de sessão).**

- Nunca use RSA direto em dados. Use com padding probabilístico (OAEP).

- Não confie em bibliotecas que não validam estrutura de padding corretamente.

- Evite expoentes públicos pequenos (e = 3). Use e = 65537.

- Se possível, use RSA só para assinar ou trocar chaves **e deixe a cifragem para AES** ,que é muito mais robusto.

<Admonition type="info" title="Tendência moderna: RSA como facilitador, não como cifrador">

A prática atual em segurança digital é usar RSA como parte de um sistema híbrido:

- O cliente gera uma chave de sessão (AES, por exemplo).

- Usa RSA para cifrar essa chave simétrica com a chave pública do servidor.

- A partir daí, tudo é feito com cifra simétrica.

- Assim você combina o melhor dos dois mundos:

- RSA para troca de chave com segurança assimétrica.

- AES (ou ChaCha20) para cifra rápida, leve e segura.

Menos exposição do RSA = menos chance de ataques de oráculo ou falhas de padding.
</Admonition>

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GAR1Ur_2IGk?si=_kpHTLOULcocCPe3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---

<iframe width="100%" height="400" src="https://www.youtube.com/embed/YcIuEBXwrWg?si=zh8Nza_IdTEajI4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

----

## Aprofundamento

[Criptografia RSA](https://repositorio.ufsc.br/bitstream/handle/123456789/203902/TCC_Camila.pdf?sequence=1&isAllowed=y)

[Criptografia RSA em novas aplicações](http://www.pos.cps.sp.gov.br/files/artigo/file/848/758b4fbfc2bf70e499e8bfd039d37660.pdf)

[CRIPTOGRAFIA RSA: análise entre a segurança e velocidade](https://periodicos.unemat.br/index.php/reps/article/view/9329/5267)

---
##  Conclusão
O RSA  Continua seguro desde que usado com inteligência.
Mas ele é um veterano, carrega décadas de implementações ruins.

Quem entende isso sabe que o desafio nunca foi só fatorar n.
O verdadeiro desafio é usar o RSA do jeito certo, no lugar certo, com as proteções certas.
