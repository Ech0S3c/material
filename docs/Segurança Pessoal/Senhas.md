---
title: Senhas Seguras
sidebar_position: 1
---
# Senhas Seguras

## Por que senhas são tão importantes?

As senhas são a **porta de entrada para nossas contas, sistemas e dados pessoais**. Elas funcionam como a primeira (e às vezes única) camada de segurança entre nós e cibercriminosos.

Um acesso indevido pode expor:
- Informações bancárias
- Fotos e documentos pessoais
- Contas de e-mail, redes sociais e até sistemas corporativos

## Como as senhas funcionam?

### Autenticação básica

Quando você digita uma senha em um site, o sistema não armazena sua senha “em texto puro”. O que ele armazena é uma **representação criptográfica** da senha, chamada de **hash**.

### O que é um hash? (Aprenderam na aula anterior, mas caso não lembre)

Um *hash* é o resultado de uma função matemática que transforma qualquer texto em uma sequência fixa de caracteres. Por exemplo:

```plaintext
Senha: minhaSenhaSegura123!
Hash SHA-256: 6d0e6f9976ff02e773b45a60f636342b7816f2ea9b3c56bfa6c1b02a1efcc38e
```

* Um mesmo texto sempre gera o mesmo hash.
* Pequenas mudanças na senha mudam completamente o hash.
* Hashes são **unidirecionais**: é quase impossível voltar ao texto original.

### Mas então por que senhas fracas ainda são um problema?

Porque os atacantes usam dicionários e **tabelas conhecidas de hashes**, como as **Rainbow Tables**, para adivinhar a senha original.

---

## O que é uma Rainbow Table?

Uma **rainbow table** é uma base de dados com milhões (ou bilhões) de combinações de senhas comuns e seus respectivos hashes.

Quando um atacante consegue acessar um banco de dados de senhas com hash, ele pode usar essas tabelas para **comparar** os valores e descobrir qual senha original gerou aquele hash especialmente se a senha for fraca, como (exemplo basico):

* `123456`
* `qwerty`
* `senha123`

### Como se proteger?

Sites seguros adicionam um processo chamado **salting**, que é um valor aleatório adicionado à senha antes de aplicar o hash. Isso torna cada hash único, mesmo que duas pessoas usem a mesma senha.

---

## O que é uma boa senha?

Uma boa senha deve ser:

* **Longa**: no mínimo 12 caracteres
* **Única**: diferente para cada site
* **Complexa**: mistura de letras maiúsculas, minúsculas, números e símbolos
* **Imprevisível**: sem nomes, datas de nascimento, palavras do dicionário

### Exemplos:

```plaintext
Fraca: gabriel1998
Fraca: senha123
Forte: 6p$TzA#1fVe8L%qx
```

### Dica prática:

Você pode usar frases com alterações, por exemplo:

```plaintext
MinhaCachorraTem3Patinhas!
```

É mais fácil de lembrar e ainda é forte.

---

## Tipos de ataques comuns a senhas

### Ataque de dicionário

O invasor tenta todas as palavras do dicionário para descobrir a senha. Muito eficiente contra senhas simples.

### Ataque de força bruta

Tenta **todas as combinações possíveis de caracteres** até encontrar a senha correta. Pode levar segundos ou anos, dependendo da complexidade da senha.

### Phishing

Engana a vítima para que ela **entregue a senha voluntariamente**. Ex: um site falso do banco.

### Vazamento de senhas

Se um site com suas credenciais for comprometido, invasores podem usar seu e-mail e senha em outros serviços (ataque de reutilização de senha).

---

## Como se proteger?

* Use **senhas únicas** para cada serviço.
* Ative a **autenticação de dois fatores (2FA)** sempre que possível.
* Utilize um **gerenciador de senhas confiável** (evite confiar apenas no navegador).
* Nunca compartilhe sua senha com ninguém.
* Cuidado com e-mails ou sites suspeitos (veja mais na seção sobre Phishing).

---

## Casos reais

* **LinkedIn (2012)**: mais de 117 milhões de senhas vazadas, muitas em texto puro ou com hash fraco.
* **RockYou (2009)**: vazamento de 32 milhões de senhas em texto simples que é até hoje usado em ataques de dicionário.
* **Dropbox (2012)**: usuários reutilizaram senhas do LinkedIn e tiveram contas comprometidas.

---

## Conclusão

Uma senha forte é **simples de criar** e pode ser a diferença entre segurança e desastre digital. Nunca subestime o impacto de uma senha fraca.

Na próxima seção, vamos ver uma das principais formas que atacantes usam para conseguir senhas: **Phishing**.