---
title: AES
sidebar_position: 2
---

# AES e seus Modos de Operação 

Todo mundo já ouviu falar de AES. É o “cifrão oficial” da internet moderna. Se você usa VPN, abre um site com HTTPS ou desbloqueia um app bancário, tem uma boa chance de estar passando por ele.

Mas a pergunta que pouca gente faz é:

```AES, como?```

Sim, porque o algoritmo é sempre o mesmo. Mas o modo de operação muda tudo.
E entender isso é o que separa o operador de ferramenta do profissional de segurança de verdade.

## 1. AES: a cifra de bloco que virou padrão global

O AES (Advanced Encryption Standard) foi padronizado pelo NIST no início dos anos 2000 para substituir o DES, que já tinha sido praticamente aposentado por exaustão (literalmente — 56 bits de chave não seguravam mais nada).

O AES funciona com:

- Blocos fixos de 128 bits

- Chaves de 128, 192 ou 256 bits

- 10, 12 ou 14 rodadas de transformação, dependendo da chave

E dentro de cada rodada, quatro operações básicas:

- Substituição de bytes (S-Box)

- Permutação de linhas (ShiftRows)

- Mistura de colunas (MixColumns)

- Adição de chave (AddRoundKey)

_Para entender melhor como funciona esse processo deixei alguns links de artigos para aprofundamento no final desse material._


## 2. Modos de Operação

Beleza. Mas até aqui, ele só está cifrando um único bloco de 128 bits, certo?

O que acontece quando você precisa cifrar um arquivo inteiro, um fluxo contínuo de dados, ou uma imagem?

A resposta vem nos modos de operação do AES

### 2.1 ECB — O jeito mais errado de usar AES
Vamos começar com o modo mais simples — e mais perigoso: o ECB (Electronic Codebook).

Nesse modo, cada bloco de 128 bits é cifrado de forma independente, ou seja, mesma chave, mesma entrada, mesmo resultado.

_“Ué, isso é ruim?”_
_R: Muito ruim._

Porque se dois blocos de texto original forem iguais, os blocos cifrados também serão idênticos.
E isso revela padrões visíveis. Já viu aquela imagem do pinguim Tux cifrada com AES-ECB? Ainda dá pra ver o pinguim!

<p style={{textAlign: 'center'}}> Tux com AES - ECB</p>

<div style={{textAlign: 'center'}}>
    <img src="../../../img/ecb_problem.jpg " />
</div>
<p></p>

Resultado: nada de confidencialidade estrutural. ECB só é seguro se seus dados forem completamente aleatórios, o que raramente acontece no mundo real.

Se você está usando AES-ECB para qualquer coisa sensível, você está errado!

### 2.2 CTR — AES disfarçado de cifra de fluxo

Aqui, a ideia é:

_“Vamos usar o AES para gerar um fluxo de bits pseudoaleatório, como se fosse uma One-Time Pad moderna.”_

Funciona assim:

- Você pega um contador (nonce + número crescente).

- Cifra esse contador com AES.

- Pega o resultado e aplica XOR com o bloco de texto original.

- Pronto. Você não cifrou o texto diretamente. Você gerou um keystream e misturou com ele.

```O que isso permite?```

- Paralelismo total, cada bloco pode ser cifrado/descriptografado separadamente.

- Segurança forte, desde que o contador não se repita nunca com a mesma chave

- O CTR transforma o AES de cifra de bloco em cifra de fluxo confiável,o que torna ele a base para muitos sistemas de criptografia rápida como criptografia de disco, transmissões de alta velocidade e VPNs.

### GCM — Cifra com autenticação embutida

Agora entra o modo GCM (Galois/Counter Mode), o favorito dos protocolos modernos como TLS 1.2 e 1.3.

Ele pega tudo de bom do CTR e adiciona autenticação integrada.

```“Mas autenticação no sentido de login?”```

```Não. Autenticação no sentido de garantir que a mensagem não foi alterada.```

O GCM gera, além do texto cifrado, uma tag de autenticação baseada em operações num campo de Galois.

Essa tag funciona como uma assinatura criptográfica da mensagem e de dados adicionais (como cabeçalhos ou metadados).

GCM é um modo AEAD (Authenticated Encryption with Associated Data):

Ele cifra, autentica, e ainda deixa você validar dados extras que não precisam ser cifrados, como headers.

Resultado: confidencialidade + integridade, de uma vez só.

Qual usar, e quando?

| Modo    | Segurança               | Autenticação | Performance                       | Uso comum        |
| ------- | ----------------------- | ------------ | --------------------------------- | ---------------- |
| **ECB** | Fraca                   | ❌            | Alta                              | Nunca            |
| **CTR** | Forte (com nonce único) | ❌            | Muito alta                        | VPN, discos      |
| **GCM** | Forte                   | ✅            | Alta (com aceleração de hardware) | TLS, IPsec, APIs |

### Boas práticas

Não adianta usar AES com um modo bom e estragar tudo com erro bobo. Então anota aí:

- Não repita IVs (vetores de inicialização). CTR e GCM quebram feio se você fizer isso.

- Não use ECB. Em hipótese nenhuma.

- Gere chaves aleatórias de verdade. Nada de senha do usuário convertida pra hex.

- Valide a tag do GCM. Não “deixe passar” se a autenticação falhar.

- Evite reutilizar chaves com dados diferentes por longos períodos.

## 3. Conclusão

<iframe width="100%" height="415" src="https://www.youtube.com/embed/0JEDinS6Vlk?si=Sjuxw2kvWCkRA9Fp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

O AES só é seguro se acoplado da maneira certa. Além do mais aprender o algoritmo é só metade do caminho. Escolher o modo certo e usá-lo corretamente é o que diferencia quem entende de quem só copia código.

## Aprofundamento

[Análise do AES e sua Criptoanálise Diferencial](https://lume.ufrgs.br/bitstream/handle/10183/54139/000855639.pdf?sequence=1)

[O algoritmo AES: Apresentac¸ao e Descrição da Estrutura](https://www.lncc.br/~borges/doc/O%20algoritmo%20AES%20Apresentacao%20e%20Descricao%20da%20Estrura.pdf)