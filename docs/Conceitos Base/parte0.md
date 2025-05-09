---
title: Fundamentos de Cybersecurity
sidebar_position: 1
---

import Admonition from '@theme/Admonition';

# 1. O que é Cybersecurity?

Quando você ouve a palavra “Cybersecurity”, qual é a imagem que aparece na sua cabeça?

Se for um hacker de capuz preto em um quarto escuro, cercado de monitores piscando códigos verdes, você está longe de estar sozinho. Essa imagem dominou o imaginário popular — e também alimentou muitos clichês em filmes e séries. Mas _cyber_ vai muito além disso.

Cybersecurity, ou segurança cibernética, não é sobre capuzes. É sobre **proteger sistemas, pessoas, dados e reputações em um mundo cada vez mais digitalizado**. É sobre entender que o mundo moderno roda sobre uma infraestrutura invisível — e que, se essa infraestrutura cair, tudo pode parar: hospitais, bancos, redes elétricas, aviões, celulares, sua conta da Steam.

A segurança da informação, nesse contexto, é o que garante que tudo continue funcionando do jeito certo.

---

## Cybersecurity é mais do que técnica

<Admonition type="info" title="Reflexão">
  Segurança não é só código e tecnologia: é também comportamento, cultura e processo.
</Admonition>

A segurança da informação se apoia em **três pilares fundamentais**:

### 1. Pessoas

- Quem cria, configura, usa e (muitas vezes) compromete os sistemas?
- Como as pessoas podem ser treinadas para não clicarem em links suspeitos?
- Como criar uma cultura de segurança dentro de uma organização?

### 2. Processos

- Políticas de acesso, regras de autenticação, planos de resposta a incidentes.
- Normas que definem o que pode ou não pode ser feito.
- Procedimentos para quando “dá ruim”.

### 3. Tecnologia

- Firewalls, antivírus, criptografia, sistemas de detecção de intrusos, e por aí vai.
- Essa é a parte visível — mas ela só funciona quando as outras estão alinhadas.

<Admonition type="caution" title="Atenção!">
  Não adianta ter a melhor tecnologia do mundo se as pessoas e processos falharem.
</Admonition>

---

## A Tríade da Segurança: CIA (sem relação com a agência americana, ok?)

A base de tudo em segurança da informação pode ser resumida nesses três princípios:

### 1. **Confidencialidade**

Garantir que apenas as pessoas autorizadas possam acessar determinada informação.  
Exemplo: seu histórico de buscas no navegador é confidencial (ou deveria ser 😅).

Ferramentas que ajudam: criptografia, autenticação, controle de acesso.

### 2. **Integridade**

Assegurar que a informação não foi alterada de forma indevida ou acidental.  
Exemplo: quando você transfere R$ 100,00 via pix, o sistema deve garantir que o valor não vire R$ 100.000,00 no caminho (se for para minha conta, quem me dera 😅).

Ferramentas que ajudam: checksums, assinaturas digitais, controle de versão.

### 3. **Disponibilidade**

Manter a informação acessível e funcional quando for necessária.  
Exemplo: aquele sistema da universidade fora do ar no dia da matrícula = falha de disponibilidade.

Ferramentas que ajudam: backups, redundância, proteção contra DDoS.

---

<Admonition type="important" title="Resumo rápido">
  Toda vez que algo dá errado em cybersecurity, pode apostar: foi a **Confidencialidade**, **Integridade** ou **Disponibilidade** que foi comprometida.
</Admonition>

---

## Por que isso importa tanto?

Porque tudo o que fazemos na era digital depende de confiança.  
Confiança de que os dados estão corretos, que não foram acessados por alguém não autorizado, e que os sistemas estarão disponíveis quando precisarmos deles.

Para aprofundar e conhecer mais sobre os conceitos de iniciais da área de Ciber segurança, recomendo que leiam o artigo da [CERT.br](https://www.cert.br/docs/palestras/certbr-egi2014.pdf)

E é isso que a segurança proporciona: **confiança operacional**.

> Se você protege um sistema, você protege pessoas, negócios e até vidas.

<details>
  <summary><b>Saiba mais sobre o CERT.br</b></summary>

O **[CERT.br](https://www.cert.br/docs/palestras/certbr-egi2014.pdf)** é o Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil.  
É mantido pelo **NIC.br**, que é responsável por:

- Operar o domínio .br
- Distribuir números IP e registros de Sistemas Autônomos
- Coordenar as iniciativas da Internet no Brasil

O CERT.br é um Grupo de Resposta a Incidentes de Segurança (CSIRT) de Responsabilidade Nacional.
</details>

---

<Admonition type="tip" title="Exercício 1.1 – Explorando a Tríade CIA">
  Escolha três situações do seu dia a dia (faculdade, internet ou uso pessoal de tecnologia) e identifique qual pilar da tríade CIA está mais envolvido.
  
  **Exemplos:**
  - Quando você faz login na Adalove → <b>Confidencialidade</b>
  - Quando acessa seu histórico acadêmico → <b>Integridade</b>
  - Quando tenta enviar um trabalho às 23h59 → <b>Disponibilidade</b>

  <br />

  Se quiser ir além: pense em como **cada pilar poderia ser violado** nessas situações!
</Admonition>

<Admonition type="tip" title="Exercício 1 — Aplicação ">
Aproveitando que não demonstrei muitos tipos de criptografia Assimétricas, recomendo que procurem por outras para aumentar o repertório de vocês, não se esqueçam de checar se elas estão obsoletas ou não.

Outra coisa, tentem responder essas perguntas:

- Como evitar ataques de intermediário durante a troca de chaves?

- Como escolher o tamanho da chave e algoritmo assimétrico ideal sem prejudicar o desempenho?

</Admonition>
