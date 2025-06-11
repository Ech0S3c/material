---
title: Criptografias Modernas
sidebar_position: 7
---

import Admonition from '@theme/Admonition';

# Criptografias Modernas
_O Futuro da Segurança da Informação está marcado por uma série de dúvidas e novas tecnologias, esse material vai detalhar superficialmente essas novas tecnologias no mundo da criptografia e da segurança da informação. Vamos falar sobre quântica e sobre um pouco de matemática/física. Esse material não tem objetivo de ser muito aprofundado, Até porque esses conceitos são bem complexos, ele é mais uma explicação do que está acontecendo atualmente no mercado e explicar um pouco sobre essas tecnologias._

## 1. O que são Criptografias Modernas?

As criptografias modernas surgem como resposta a desafios contemporâneos e futuros da segurança digital, indo além dos algoritmos clássicos como RSA e AES. São métodos desenvolvidos para lidar com novas ameaças, como o avanço dos computadores quânticos, a demanda por privacidade em ambientes de nuvem e a possibilidade de operar diretamente sobre dados criptografados.

Entre essas técnicas emergentes, irei comentar sobre três grandes linhas:

- **Criptografia Quântica:** baseada nos princípios da mecânica quântica.

- **Criptografia Homomórfica:** permite processamento de dados cifrados.

- **Criptografia Pós-Quântica:** resistente a ataques de computadores quânticos.

Cada uma resolve **problemas específicos**, mas todas compartilham o objetivo de garantir segurança em cenários onde os algoritmos tradicionais não são suficientes e novamente assegurando os pilares que estamos tentando manter: Confidencialidade, Integridade,Autenticidade, Não-repúdio. Sei que a essa altura tá chato falar sobre isso, mas isso tem que estar martelado na mente de vocês.

## 1.1 Como funcionam?
Como cada uma tem um objetivo diferente, todas elas tem algumas funcionalidade únicas:

### Criptografia Quântica

A criptografia quântica não se baseia em suposições matemáticas, como a dificuldade de fatorar primos ou resolver logaritmos discretos, igual os algoritmos que vimos até agora. Ela se apoia em princípios da física quântica, especialmente no princípio da incerteza de Heisenberg e no entrelaçamento quântico.

A aplicação mais conhecida é a distribuição de chaves quânticas (QKD – Quantum Key Distribution). No protocolo BB84([artigo](https://www.scielo.br/j/rbef/a/rtjpncryxChxYBM4QjCjwby/?lang=pt)), por exemplo, dois usuários trocam bits de forma que qualquer tentativa de espionagem interfere no sistema, denunciando a presença de um atacante.

Não há cifragem quântica em si. O que a criptografia quântica garante é uma forma segura de gerar e distribuir chaves simétricas, que depois serão usadas em algoritmos tradicionais como o AES.

---
### Criptografia Homomórfica
A criptografia homomórfica é uma técnica que permite realizar operações matemáticas sobre dados cifrados, sem precisar descriptografá-los(E isso é incrível apesar de ser extremamente difícil). 

Por exemplo, suponha que uma empresa envie dados super sensíveis a um provedor de nuvem para processamento. Com a criptografia tradicional, seria necessário descriptografar os dados para operá-los, expondo-os ao risco de vazamento. Com a homomórfica, é possível calcular diretamente sobre os dados cifrados, e depois só o cliente final pode decifrar o resultado. Isso dá um Up absurdo em questões da privacidade, pense só, só você tem acesso aos seus dados, nem mesmo seu armazenador teria.

<p style={{textAlign: 'center'}}> Diagramas homomórfica </p>

<div style={{textAlign: 'center'}}>
    <img src="../../static/img/criptografiahomomorfica.jpg" />
</div>
<p></p>

Há diversos tipos:

**Parcialmente homomórfica:** permite apenas uma operação (adição ou multiplicação).

**Algumas operações (somewhat homomorphic):** permite poucas operações, limitadas por profundidade computacional.

**Totalmente homomórfica (FHE – Fully Homomorphic Encryption):** permite operações arbitrárias, sendo o “Santo Graal” da privacidade computacional.

Quer aprofundar? [Leia](https://www.welivesecurity.com/br/2019/09/06/criptografia-homomorfica-um-esquema-de-criptografia-cada-vez-mais-usado/)

---
### Criptografia Pós-Quântica

A criptografia pós-quântica busca substituir algoritmos tradicionais como RSA e ECC, que são vulneráveis a ataques de computadores quânticos, especialmente ao [algoritmo de Shor](https://painel.passofundo.ifsul.edu.br/uploads/arq/202204131438061292491933.pdf), capaz de fatorar inteiros em tempo polinomial.

O objetivo é **criar algoritmos que possam ser executados com computadores clássicos, mas que sejam resistentes a ataques quânticos.**

Existem cinco principais famílias:

- **Baseadas em reticulados (lattices):** usam problemas matemáticos de vetores em espaços multidimensionais.

- **Baseadas em códigos (code-based):** envolvem codificação e decodificação de mensagens com erros.

- **Baseadas em multivariáveis (multivariate):** usam sistemas polinomiais não-lineares.

- **Baseadas em isogenias de curvas elípticas:** generalização de curvas elípticas.

- **Baseadas em hash:** usam apenas funções hash como base para assinaturas digitais.

O NIST [(National Institute of Standards and Technology)](https://pt.wikipedia.org/wiki/Instituto_Nacional_de_Padr%C3%B5es_e_Tecnologia) está liderando um processo de padronização que selecionará os algoritmos que substituirão os atuais em cenários sensíveis.

---

## 1.2 Problemas, Limitações e Desafios

**Criptografia Quântica**

**Limitações físicas:** depende de hardware altamente sensível e canais ópticos especiais.

**Escalabilidade:** ainda não é viável em grandes distâncias ou redes complexas sem repetidores quânticos.

**Alto custo:** implementação ainda é restrita a aplicações altamente críticas e institucionais.

---

**Criptografia Homomórfica**

**Baixo desempenho:** operações sobre dados cifrados são muito mais lentas que sobre dados abertos.

**Complexidade matemática:** algoritmos homomórficos são difíceis de implementar corretamente.

**Limitação de uso prático:** embora existam implementações funcionais, o uso em produção ainda é restrito a casos altamente específicos.

---
**Criptografia Pós-Quântica**

**Tamanhos de chave e assinatura:** alguns algoritmos possuem chaves públicas e assinaturas com centenas de kilobytes.

**Compatibilidade com protocolos existentes:** a substituição exige reestruturação de protocolos como TLS, SSH e PGP.

**Ambiente em constante mudança:** não há consenso final, e os algoritmos ainda estão sendo testados e auditados globalmente.

---

## 2. Aplicações Reais

### Criptografia Quântica
- Bancos centrais e instituições governamentais têm testado links ópticos com QKD para transmissão de dados sensíveis.

- Exército e inteligência em países como China, EUA e Rússia têm projetos avançados com satélites quânticos.

### Criptografia Homomórfica
- Hospitais e seguradoras podem analisar dados criptografados de pacientes sem violar a privacidade.

- Pesquisa genética: permite análises de genoma sem revelar os dados originais.

### Criptografia Pós-Quântica

- Empresas como Google, Microsoft e Cloudflare já começaram testes com TLS pós-quântico.

- O NIST já selecionou algoritmos como Kyber (criptografia) e Dilithium (assinatura) como finalistas para padronização.

## 3. Algoritmos Populares

| Categoria               | Algoritmo         | Status/Notas                      |
| ----------------------- | ----------------- | --------------------------------- |
| Quântica                | BB84              | Usado em QKD                      |
| Homomórfica             | BFV, BGV, CKKS    | Usados em frameworks como SEAL    |
| Pós-Quântica (lattices) | Kyber             | Finalista NIST, substituto do RSA |
| Pós-Quântica (assin.)   | Dilithium, Falcon | Finalistas NIST para assinaturas  |
| Hash-based              | SPHINCS+          | Resistente a ataques quânticos    |

<details>
<summary><b>Criptografia Quântica</b></summary>


BB84: Primeiro protocolo de distribuição de chaves quânticas.

E91: Baseado em entrelaçamento quântico para distribuição de chaves.
</details>

<details>
<summary><b>Criptografia Pós-Quântica</b></summary>


Kyber: Baseado em reticulados, proposto para criptografia de chave pública.

Dilithium: Algoritmo de assinatura digital baseado em reticulados.

SPHINCS+: Baseado em funções hash, oferece assinaturas digitais seguras.
</details>
<details>
<summary><b>Criptografia Homomórfica</b></summary>

Paillier: Suporta adição homomórfica.

BFV: Suporta operações aritméticas em inteiros.

CKKS: Permite operações em números reais aproximados.
</details>
## 4. Mitos e dúvidas

<Admonition type="caution" title="Atenção!">

“Criptografia quântica é criptografia feita por computadores quânticos” – Errado. Ela usa princípios quânticos para distribuição de chaves, mas as chaves ainda protegem dados com AES ou similares.

---

“Computadores quânticos já quebram RSA” – Ainda não. Mas estimativas realistas indicam que, quando isso for possível, será tarde demais para migrar sem planejamento.

---

“Criptografia homomórfica é prática para qualquer aplicação” – Errado. Ela é lenta e restrita a ambientes específicos com demandas claras de privacidade.

---

“SHA-256 é seguro contra quântica” – Parcialmente. O algoritmo de Grover acelera a quebra, mas ainda assim exige 2^128 operações, o que o torna viável no médio prazo.

</Admonition>

## Aprofundamento

#### Criptografia Quântica

- https://www.ibm.com/think/topics/quantum-cryptography

- https://www.sciencedirect.com/topics/engineering/quantum-cryptography

#### Criptografia pós - quântica

- https://csrc.nist.gov/projects/post-quantum-cryptography

- https://www.microsoft.com/en-us/research/project/post-quantum-cryptography/

#### Criptografia Homomórfica

- https://www.ibm.com/think/topics/homomorphic-encryption

- https://www.sciencedirect.com/topics/computer-science/fully-homomorphic-encryption