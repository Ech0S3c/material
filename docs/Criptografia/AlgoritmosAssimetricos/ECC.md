---
title: ECC
sidebar_position: 3
---

# ECC - Elliptic Curve Cryptography

Imagine que você está construindo um sistema de segurança e precisa escolher qual ferramenta matemática vai sustentar a criptografia. Você pode ir pelo caminho clássico do RSA, com suas chaves de 2048 ou até 4096 bits. Funciona e é confiável. Mas vem com um custo pesado: **processamento, memória, largura de banda.**

_Mas já imaginou se você pudesse manter o mesmo nível de segurança com uma chave de apenas 256 bits?_

Isso é possível com as Curvas elípticas


## 1. O que é Criptografia de Curva Elíptica (ECC)?

A ECC — Elliptic Curve Cryptography,  é uma forma de criptografia de chave pública baseada em uma estrutura matemática que parece bem simples à primeira vista:


```y² = x³ + ax + b```


Essa é a equação geral de uma curva elíptica. Mas a mágica acontece quando ela é definida sobre um campo finito, como um campo primo Fp.

<p style={{textAlign: 'center'}}> Gráfico curva Elíptica y² = x³ + ax + b </p>

<div style={{textAlign: 'center'}}>
    <img src="../../../img/ECC.png" style = {{width: 700}} />
</div>
<p></p>

Sob esse contexto, os pontos (x, y) que satisfazem essa equação passam a formar uma estrutura com propriedades únicas.


```Mas qual é o truque para que ela seja segura?```

Tudo gira em torno de um problema: **o Logaritmo Discreto em Curvas Elípticas (ECDLP).**

Aqui está o desafio:

- Você escolhe um ponto P na curva.

- Multiplica esse ponto por um número secreto k, ou seja, Q = kP.

- Agora, publique P e Q.

- E diga ao atacante: “Descubra k.”

Até hoje, ninguém conseguiu fazer isso de forma eficiente **para curvas bem escolhidas**. Isso é o que sustenta toda a segurança da ECC.

Essa multiplicação escalar,  somar um ponto a si mesmo várias vezes,  é simples de executar. Mas o caminho inverso, descobrir quantas vezes esse ponto foi somado, é considerado intratável com os recursos computacionais atuais.

---
## 2. Estrutura matemática

Para funcionar corretamente, a curva precisa obedecer a uma condição de não singularidade:

```4a³ + 27b² ≠ 0```


Isso evita que a curva tenha pontos degenerados (com duas tangentes, ou sem tangente alguma). O que a gente quer é que essa curva forme um grupo abeliano, onde a operação de adição de pontos é bem definida e tem uma identidade,  um “ponto no infinito” que funciona como o zero dessa álgebra.

---
## 3. Aplicações práticas
Você não está estudando curvas elípticas só por diversão (existe doido pra tudo).

A ECC aparece em quase toda aplicação moderna que requer segurança eficiente:

- ECDH (Elliptic Curve Diffie-Hellman) – troca de chaves sem que ninguém revele nada.

- ECDSA (Elliptic Curve Digital Signature Algorithm) – assinatura digital leve e confiável.

- TLS – conexão segura via HTTPS? ECC está ali.

- SSH, GPG, certificados digitais

- Criptomoedas – Bitcoin usa secp256k1 para gerar endereços e validar transações.

Curvas como **Curve25519** e **secp256k1** foram criadas com foco em resistência a falhas de implementação, performance e transparência. E são justamente essas qualidades que tornam ECC tão atrativa em ambientes onde cada byte importa, de smartphones a sensores IoT.

---
## 4. ECC vs RSA
A comparação mais gritante está no tamanho da chave. Uma chave ECC de 256 bits oferece o mesmo nível de segurança que uma chave RSA de 3072 bits.
Isso significa:

- Menos dados transmitidos.

- Menos consumo de CPU.

- Menos espaço em disco.

- Mais velocidade em conexões seguras.

Ou seja: mais segurança com menos esforço. Isso é ouro em sistemas embarcados, aplicações mobile, e qualquer lugar onde o desempenho é um recurso crítico.

**Mas atenção,  nem toda curva é igual**

Escolher a curva errada é como construir uma fortaleza com uma porta de papelão.

Existem curvas elípticas que foram amplamente adotadas, mas que possuem parâmetros obscuros ou potencialmente enfraquecidos por design. É por isso que hoje, a comunidade se orienta por curvas:

- Bem documentadas

- Auditoráveis

- Com origem transparente

Exemplos recomendados:

- **Curve25519:** eficiente, segura, resistente a falhas de implementação.

- **secp256k1:** base da segurança do Bitcoin.

Evite curvas que você não entende, que não foram auditadas ou que vêm "prontas demais" sem documentação.

### E quanto à segurança?
Até o momento, não existe algoritmo eficiente para quebrar ECC bem implementada.

Mas sim: como qualquer sistema de chave pública tradicional, a ECC também será quebrável com um computador quântico universal funcional (graças ao algoritmo de Shor).

---

<iframe width="100%" height="450" src="https://www.youtube.com/embed/dCvB-mhkT0w?si=H1Gm6vlV4J3BfgFO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

----

<iframe width="100%" height="450" src="https://www.youtube.com/embed/gPv6nw1tNY0?si=Dst_tkze7j8aezol" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Aprofundamento

[Introdução Curvas Elípticas](https://www.maxwell.vrac.puc-rio.br/53709/53709.PDF)

[Curvas ELípticas e Criptografia](https://repositorio.ufu.br/bitstream/123456789/30844/1/CurvasEl%C3%ADpticasCriptografia.pdf)

---
## Conclusão
Curvas elípticas são um exemplo de como a matemática pode ser elegante e brutalmente eficaz ao mesmo tempo.
São a prova de que tamanho não é documento — pelo menos quando o assunto é chave criptográfica.

Você não precisa de megabytes de chave para ter segurança. Precisa da curva certa, da implementação certa e da mentalidade certa.

Porque quem domina ECC não só economiza bits — economiza problemas.

