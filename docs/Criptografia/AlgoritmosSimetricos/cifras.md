---
title: Cifras de Bloco vs. Cifras de Fluxo 
sidebar_position: 1
---

import Admonition from '@theme/Admonition';

# Cifras de Bloco vs. Cifras de Fluxo 

Chegamos a uma bifurcação clássica no mundo da criptografia simétrica:
Cifras de Bloco e Cifras de Fluxo.

Ambas prometem confidencialidade, ambas usam chaves secretas,porém  cada uma delas resolve um problema diferente. E é exatamente por isso que você precisa conhecer como funcionam, onde vivem e por que quebram.

## 1. Cifras de Bloco — Criptografia em pedaços, força bruta em estrutura

Imagine que você tem um arquivo de 1MB e quer cifrar. A cifra de bloco diz o seguinte:

_“Ok, me dá esse arquivo, vou cortar em pedaços de 128 bits e cifrar bloco por bloco.”_

Aí entra o **AES (Advanced Encryption Standard)**, que é a cifra de bloco moderna mais usada hoje, ele opera sobre blocos de 128 bits, com chaves de 128, 192 ou 256 bits.


**O que ele faz com cada bloco?**

Aplica uma sequência de substituições, permutações e misturas não lineares, rodadas após rodadas.

Resultado? Um bloco cifrado que não se parece em nada com o original. Se bem usado.

## 2. Cifras de Fluxo — Byte por byte, no ritmo da transmissão
Agora pense diferente:

Você quer cifrar uma transmissão de áudio ao vivo, ou um canal que nunca termina, então não dá pra ficar esperando juntar 128 bits.

A cifra de fluxo vem para solucionar esse problema:

_“Vou gerar um fluxo contínuo de bits pseudoaleatórios (keystream) e aplicar XOR com seu dado. Um byte entra, um byte sai.”_


Parece o one-time pad, só que com um gerador pseudoaleatório no lugar da fita infinita de bits verdadeiramente aleatórios.

<Admonition type="info" title="Exemplo clássico:">

Durante anos, o RC4 foi o mais utilizado em WEP, WPA...(basicamente proteção ao Wi-fi)

Depois de um tempo eles quebraram.
A geração de keystream(_fluxo de aleatório ou pseudoaleatório de caracteres que são combinados com um texto simples mensagem para produzir uma mensagem encriptada_) era previsível, e a reutilização de IVs explodia tudo.

Atualmente são usados algotimos como o **Chacha20**

- Usa operações de adição, rotação e XOR (ARX)

- Rápido até em processadores sem AES-NI

- Seguro contra ataques de canal lateral(vamos aprofundar mais a frente)

- Usado com Poly1305 para formar ChaCha20-Poly1305 (AEAD)

ChaCha20 é o que você usa quando precisa de cifra de fluxo com autenticação embutida.

OBS: _Poly1305 é um código de autenticação de mensagem (MAC) projetado para garantir a integridade e autenticidade de dados_


</Admonition> 

## 3. Bloco vs. Fluxo

| Característica                      | Cifras de Bloco                  | Cifras de Fluxo                                |
| ----------------------------------- | -------------------------------- | ---------------------------------------------- |
| Unidades processadas                | Blocos fixos (ex: 128 bits)      | Bits ou bytes individuais                      |
| Exemplos                            | AES, DES, Blowfish               | ChaCha20, RC4, Salsa20                         |
| Estrutura de operação               | Precisa de modo (ECB, CBC, etc.) | Keystream pseudoaleatório + XOR                |
| Latência                            | Maior (processamento em blocos)  | Baixa (processamento contínuo)                 |
| Aplicações comuns                   | Arquivos, discos, VPNs, TLS      | Streaming, VoIP, sistemas embarcados           |
| Segurança contra reutilização de IV | Controlável via modo de operação | **Altamente sensível** à reutilização de nonce |
| Suporte a autenticação              | Depende do modo (ex: GCM)        | Combinado com MAC (ex: Poly1305)               |

<Admonition type="info" title="Vídeos Complementares">

<iframe width="100%" height="415" src="https://www.youtube.com/embed/dM77yjDLGzk?si=0D40pQWCUtKHAIQ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
<iframe width="100%" height="415" src="https://www.youtube.com/embed/GkP0dlgCWNw?si=W96Uq_iMkoR_gb7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

----

<iframe width="100%" height="415" src="https://www.youtube.com/embed/36TL3l_xqJY?si=59qviwWRlDX6gFwj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---


</Admonition> 

### Cuidados práticos
- **Nunca reuse o mesmo keystream com cifras de fluxo.** É um desastre.
Isso aconteceu com o WEP: IVs curtos, colisão fácil, segurança quebrada.

- **Nunca use ECB com cifras de bloco.** Você só está cifrando pedaços, mas revelando a estrutura.

- **Para arquivos grandes ou paralelismo?** CTR ou GCM.

- **Para streaming em dispositivos móveis?** ChaCha20-Poly1305.

## 4. Conclusão
A diferença entre uma cifra segura e um desastre criptográfico não está apenas na cifra — está no modo como ela é usada.

- Cifras de bloco são blocadas. Organizadas. Fortes. Mas exigem cuidado nos modos de operação.

- Cifras de fluxo são leves, flexíveis e eficientes, Mas frágeis se mal configuradas.

Criptografia simétrica não é uma escolha binária. É um jogo de encaixe:
**contexto, desempenho, segurança, hardware, tudo importa para o sucesso da criptografia**