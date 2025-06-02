---
title: Fundamentos de Criptografia
sidebar_position: 1
---
import Admonition from '@theme/Admonition';

# 1. Fundamentos de Criptografia

*"Se você está lendo isso em paz, agradeça a criptografia."*

&emsp; Só para deixar claro, você ,meu caro echoservo, está usando criptografia hoje e nem percebeu. Ela está lá quando você acessou seu e-mail, mandou mensagem no WhatsApp, desbloqueou o celular com biometria e até quando entrou no Inteli e fez o checkin. 

&emsp;Nessa parte do estudo de vocês, vamos colocar os holofotes sobre ela. Não como uma coisa mágica, mas como ciência. E se prepare, porque criptografia não é uma ferramenta — é um paradigma de segurança. Sem ela, não existe internet e cibersegurança vira um mero conceito.

## 1.1 O que é Criptografia?
&emsp; Criptografia é, antes de tudo, um problema. Um problema com uma solução bem sofisticada: esconder a informação de quem não deveria vê-la e permitir que ela seja lida por quem tem o direito. E sim, isso parece simples. Até você tentar fazer direito ~e provavelmente falhar~.

Vamos pegar a explicação da Wikipédia:

---

" _Em resumo,a criptografia baseia-se na prática ou estudo para a construção de uma comunicação segura e privada entre dois pontos, normalmente quando há presença de um adversário, ou seja, é a construção de um protocolo que impede terceiros ou pessoas públicas de lerem mensagens que devem ser privadas._

_O crescimento da tecnologia criptográfica levantou uma série de questões legais na Era da Informação. **O potencial da criptografia para uso como uma ferramenta de espionagem e sedição levou muitos governos a classificá-la como uma arma e a limitar ou mesmo proibir seu uso e exportação**. Em algumas jurisdições onde o uso da criptografia é legal, as leis permitem que os investigadores obriguem a divulgação de chaves de encriptação para documentos relevantes para uma investigação. A criptografia também desempenha um papel importante na gestão de direitos digitais e disputas de violação de direitos autorais com relação à mídia._
"

---

O objetivo da criptografia não é só cifrar e decifrar dados, é garantir as quatro propriedades fundamentais:

<Admonition type="important" title="quatro propriedades fundamentais">

**Confidencialidade:** impedir o acesso não autorizado à informação.

**Integridade:** garantir que o conteúdo não foi alterado.

**Autenticidade:** confirmar que a origem da informação é legítima.

**Não-repúdio:** impedir que o autor da mensagem negue sua autoria.
</Admonition>


&emsp; Novamente trazendo esses conceitos, que são a base da Cibersegurança sem eles, ela não existe. Então, dê mais atenção quando for revisita-los.
Agora que você já deve ter percebido que isso envolve bem mais do que esconder um texto com senha no WinRAr, a gente pode continuar.

## 1.2 Uma Breve História da Arte de Esconder - by IBM [^1]

&emsp; Desde os tempos antigos, o envio de mensagens secretas tem sido uma prática comum em quase todas as grandes civilizações. Nos tempos modernos, a criptografia se tornou um pilar fundamental da cibersegurança, tanto é que estamos estudando aqui. 
Desde a proteção de mensagens pessoais cotidianas e a autenticação de assinaturas digitais até a proteção de informações de pagamento para compras on-line e a guarda de dados e comunicações ultrassecretos do governo, a criptografia torna a privacidade digital possível.(na maior parte do tempo).

&emsp; Embora a prática remonte a milhares de anos, o uso da criptografia e o campo mais amplo da criptoanálise ainda são considerados relativamente jovens, tendo feito enormes avanços apenas nos últimos 100 anos. Coincidindo com a invenção da computação moderna no século XIX, o início da era digital também marcou o nascimento da criptografia moderna. Como um meio crítico de estabelecer confiança digital, matemáticos, cientistas da computação e criptógrafos começaram a desenvolver técnicas e sistemas criptográficos modernos para proteger dados críticos dos usuários contra hackers, cibercriminosos e olhares curiosos.

&emsp; A maioria dos sistemas criptográficos começa com uma mensagem não criptografada conhecida como _plaintext_, que é então criptografada em um código indecifrável conhecido como **texto cifrado**, utilizando uma ou mais chaves de criptografia. Esse texto cifrado é então transmitido a um destinatário. Se o texto cifrado for interceptado e o algoritmo de criptografia for forte, o texto cifrado será inútil para qualquer bisbilhoteiro não autorizado porque eles não conseguirão quebrar o código. O destinatário pretendido, no entanto, poderá decifrar facilmente o texto, **desde que tenha a chave de descriptografia correta**.


### Criptografia antiga
**1900 a.C.:** uma das primeiras implementações de criptografia foi encontrada no uso de hieróglifos não padronizados esculpidos na parede de um túmulo do Antigo Reino do Egito.

**1500 a.C.:** tabletes de argila encontrados na Mesopotâmia continham escrita cifrada, que se acredita serem receitas secretas para esmaltes cerâmicos, o que hoje seriam considerados segredos comerciais.

**650 a.C.:** os antigos espartanos usavam um cifrador de transposição inicial para embaralhar a ordem das letras em suas comunicações militares. O processo consistia em escrever uma mensagem em um pedaço de couro enrolado em um bastão hexagonal de madeira conhecido como cítala. Quando a tira era enrolada corretamente em uma cítala de tamanho correto, as letras formavam uma mensagem coerente; quando desenrolada, a mensagem era reduzida a texto cifrado. No sistema de cítala, o tamanho específico do bastão pode ser considerado como uma chave privada.

**100-44 AC:** para compartilhar comunicações seguras dentro do exército romano, Júlio César é creditado por usar o que ficou conhecido como o Cifra de César, um cifrador de substituição onde cada letra do texto original é substituída por outra letra, determinada movendo-se um número fixo de posições no alfabeto latino. Nesse sistema criptográfico de chave simétrica, os passos e a direção da transposição das letras representam a chave privada.

---

### Criptografia medieval

**800:** o matemático árabe Al-Kindi inventou a técnica de análise de frequência para quebra de cifradores, representando um dos maiores avanços na criptoanálise. A análise de frequência usa dados linguísticos, como a frequência de certas letras ou combinações de letras (partes do discurso e construção de frases), para reverter as chaves de descriptografia. Técnicas de análise de frequência podem ser usadas para acelerar ataques de força bruta, nos quais os decifradores de códigos tentam decifrar metodicamente mensagens codificadas aplicando sistematicamente chaves potenciais, com a esperança de encontrar a correta. As cifras de substituição monoalfabéticas que usam apenas um alfabeto são particularmente suscetíveis à análise de frequência, especialmente se a chave privada for curta e fraca. Os escritos de Al-Kandi também abordaram técnicas de criptoanálise para cifras polialfabéticas, que substituem texto simples por texto cifrado de vários alfabetos para uma camada adicional de segurança muito menos vulnerável à análise de frequência.

**1467:** considerado o pai da criptografia moderna, Leon Battista Alberti foi quem mais claramente explorou o uso de cifras que incorporavam vários alfabetos, conhecidos como criptossistemas polifônicos, como a forma mais forte de criptografia da Idade Média.

**1500:** embora tenha sido publicado por Giovan Battista Bellaso, a Cifra de Vigenère foi erroneamente atribuída ao criptologista francês Blaise de Vigenère e é considerada o marco das cifras polifônicas do século XVI. Embora Vigenère não tenha inventado a Cifra de Vigenère, ele criou uma cifra de autochave mais forte em 1586.

---

### Criptografia moderna

**1913:** a eclosão da Primeira Guerra Mundial no início do século XX viu um aumento acentuado tanto na criptologia para comunicações militares quanto na criptoanálise para quebra de códigos. As habilidades dos especialistas ingleses em decifrar os códigos telegráficos alemães resultaram em triunfos decisivos para a frota britânica.

**1917:** o americano Edward Hebern criou a primeira máquina de criptografia rotativa, combinando circuitos elétricos com partes de uma máquina de escrever mecânica para embaralhar automaticamente mensagens. Os usuários podiam digitar uma mensagem em texto original em um teclado padrão de máquina de escrever, e a máquina criava automaticamente uma cifra de substituição, substituindo cada letra por uma nova letra aleatória para produzir texto cifrado. O texto cifrado, por sua vez, podia ser decodificado manualmente ao reverter o rotor do circuito e digitar o texto cifrado de volta na máquina de rotor de Hebern, produzindo a mensagem original.

**1918:** após a guerra, o criptologista alemão Arthur Scherbius desenvolveu a máquina Enigma, uma versão avançada da máquina de Rotor de Hebern, que também usava circuitos de rotor para codificar o texto original e decodificar o texto cifrado. Usada amplamente pelos alemães antes e durante a Segunda Guerra Mundial, a máquina Enigma era considerada adequada para o mais alto nível de criptografia ultrassecreta. No entanto, assim como a máquina de rotor de Hebern, a decodificação de uma mensagem criptografada com a máquina Enigma exigia o compartilhamento avançado de configurações de calibração da máquina e chaves privadas, que eram suscetíveis à espionagem e eventualmente levaram à queda da Enigma.

**1939-45:** com a eclosão da Segunda Guerra Mundial, os decifradores poloneses fugiram da Polônia e se juntaram a muitos matemáticos britânicos notáveis e famosos, incluindo o pai da computação moderna, Alan Turing, para decifrar o criptossistema alemão Enigma, um avanço crítico para as Forças Aliadas. O trabalho de Turing estabeleceu, especificamente, grande parte da teoria fundamental para computações algorítmicas. Até a Segunda Guerra Mundial, a maioria do trabalho sobre criptografia era para fins militares, geralmente usada para ocultar informações militares secretas. No entanto, a criptografia atraiu a atenção do mercado no pós-guerra, com empresas tentando proteger seus dados dos concorrentes.

**1975:** pesquisadores que trabalhavam em cifras de bloco na IBM desenvolveram o Data Encryption Standard (DES), o primeiro criptossistema certificado pelo National Institute for Standards and Technology (na época conhecido como National Bureau of Standards) para uso pelo governo dos EUA.Embora o DES fosse forte o suficiente para superar até os computadores mais poderosos dos anos 1970, seu comprimento curto de chave o torna inseguro para aplicações modernas. No entanto, sua arquitetura foi e continua a ser altamente influente no avanço da criptografia.

**1976:** os pesquisadores Whitfield Hellman e Martin Diffie introduziram o método de troca de chaves Diffie-Hellman para compartilhamento seguro de chaves criptográficas. Isso permitiu uma nova forma de criptografia chamada algoritmos de chave assimétrica. Esses tipos de algoritmos, também conhecidos como criptografia de chave pública, oferecem um nível ainda mais alto de privacidade, pois não dependem mais de uma chave privada compartilhada. Em criptossistemas de chave pública, cada usuário tem sua própria chave secreta privada que funciona em conjunto com uma chave pública compartilhada para maior segurança.

**1977:** Ron Rivest, Adi Shamir e Leonard Adleman introduziram o criptossistema de chave pública RSA, uma das técnicas de criptografia mais antigas para transmissão segura de dados, que ainda está em uso hoje.As chaves públicas RSA são criadas pela multiplicação de números primos grandes, que são extremamente difíceis de fatorar, mesmo para os computadores mais poderosos, sem conhecimento prévio da chave privada usada para criar a chave pública.

**2001:** em resposta aos avanços no poder de processamento, o DES foi substituído pelo Advanced Encryption Standard (AES), um algoritmo de criptografia mais robusto. Semelhante ao DES, o AES também é um criptossistema simétrico, no entanto, ele usa uma chave de criptografia muito mais longa, que não pode ser quebrada pelo hardware moderno.

_Ufa! História ENORME né não?!?!_

---
## 1.3 Criptografia Simétrica vs. Criptografia Assimétrica

A primeira decisão em qualquer sistema criptográfico é qual paradigma utilizar: simétrico ou assimétrico. Cada um tem suas forças, fraquezas e casos de uso bem definidos.

### **Criptografia Simétrica:** 

Na criptografia simétrica, tanto quem envia quanto quem recebe a mensagem usam a mesma chave secreta para cifrar e decifrar os dados. Essa é a forma mais antiga de criptografia e, até hoje, é a mais eficiente em termos de desempenho computacional.

É tipo quando duas pessoas combinam uma senha e usam a mesma pra trancar e destrancar a porta. É rápida, eficiente e ótima pra quem já se conhece.

**Vantagens:**

- Alta performance.

- Baixa sobrecarga de recursos.

**Desvantagens:**

- Distribuição de chaves: precisa de um canal seguro pré-existente para enviar a chave.

- Escalabilidade ruim em ambientes com muitos usuários (exige uma chave única para cada par de comunicação).


_Exemplos: AES, Blowfish, DES(falecido já)._

---

### **Criptografia Assimétrica:** 
A criptografia assimétrica utiliza um par de chaves: uma pública (pode ser divulgada) e uma privada (mantida em segredo). Dados cifrados com uma só podem ser decifrados com a outra.

Essa abordagem permite resolver o problema da troca segura de chaves, autenticação de identidade e assinatura de mensagens.

é aquela em que um tranca e o outro destranca — com chaves diferentes. Um par de chave pública e chave privada faz a mágica acontecer. Um grita publicamente, o outro sussurra no ouvido.


**Vantagens:**

- Resolve o problema da distribuição de chaves.

- Permite autenticação sem troca prévia de segredo.

- Fundamental para assinaturas digitais e infraestrutura de chave pública (PKI).

**Desvantagens:**

- Baixo desempenho: não é adequado para grandes volumes de dados.

- Mais vulnerável a ataques de canal lateral, se mal implementado.

- Chaves e operações maiores e mais lentas que simétricas.

_Exemplos: RSA, ECC, ElGamal._


---
<Admonition type="info" title="💡 Entenda">
  Na vida real, a gente mistura os dois. O canal é montado com criptografia assimétrica, depois se comunica com uma chave simétrica (ex: HTTPS). É tipo pedir licença com formalidade e depois bater um papo de chinelo.


  Aliás, antes de prosseguir, recomendo que saiba o que é o [NIST](https://www.ibm.com/br-pt/topics/nist)
</Admonition>

### Referências 

[^1]: https://www.ibm.com/br-pt/think/topics/cryptography-history


