---
title: Criptografia Assimetrica
sidebar_position: 3
---
import Admonition from '@theme/Admonition';

# Criptografia Assimétrica

Imagine que você quer trancar um cofre, mas ao invés de compartilhar uma chave com outra pessoa, você simplesmente publica o "lado de fora" da fechadura para o mundo — qualquer um pode trancar, mas só você pode abrir. Essa é a essência da **criptografia assimétrica**, também chamada de **criptografia de chave pública**.


## 1. O que é Criptografia Assimétrica?

A criptografia assimétrica, conhecida como criptografia de chave pública ou criptografia assimétrica, é um dos dois principais métodos ao lado da criptografia simétrica.

A criptografia assimétrica funciona por meio da criação de um par de chaves, uma pública e outra privada. Qualquer pessoa pode usar uma chave pública para criptografar dados. No entanto, apenas os detentores da chave privada correspondente podem descriptografar esses dados.

Qualquer pessoa pode usar uma chave pública para criptografar dados, mas apenas as pessoas com a chave privada correta podem descriptografá-los e lê-los.

As chaves funcionam como códigos complexos necessários para abrir um cofre. Sem a chave criptográfica correta, os usuários não podem decodificar os dados. Geralmente, quanto maior a chave, maior a segurança. A criptografia assimétrica é conhecida por ter comprimentos de chave muito maiores do que a criptografia simétrica, o que contribui para uma maior segurança.

Explciando um pouco melhor:

- A chave pública criptografa dados ou verifica assinaturas digitais e pode ser distribuída e compartilhada livremente.

- A chave privada descriptografa dados e cria assinaturas digitais, mas deve ser secreta para garantir a segurança.

A segurança da criptografia da chave pública depende de manter a chave privada confidencial e, ao mesmo tempo, compartilhar livremente a chave pública. A chave pública só pode criptografar dados, dessa forma não é muito interessante para os agentes de ameaças. Como os usuários nunca precisam compartilhar suas chaves privadas, isso reduz o risco de hackers interceptarem essas chaves que são muito mais valiosas.

A criptografia assimétrica também pode ajudar a garantir a autenticação. Por exemplo, o remetente pode criptografar uma mensagem usando sua chave privada e enviá-la ao destinatário. O destinatário pode então usar a chave pública do remetente para descriptografar a mensagem, confirmando assim que foi o remetente real que a enviou.

Pense no processo como a uma caixa de correio que está trancada: qualquer pessoa pode colocar uma carta em uma caixa de correio, mas apenas o proprietário pode destrancar, pegar e ler as cartas.

<p style={{textAlign: 'center'}}> Diagrama Criptografia Assimétrica</p>

<div style={{textAlign: 'center'}}>
    <img src="../../static/img/diagramacripassimetrica.png" />
</div>
<p></p>

Ainda não entendeu como funciona?

<Admonition type="info" title="Exemplo: Alice e Bob">
Vamos pensar novamente na Alice e no Bob querendo trocar mensagens:

- Alice quer enviar um e-mail para Bob e garantir que apenas ele possa ler a mensagem. Ela usa a chave pública de Bob para criptografar a mensagem.

- Bob recebe a mensagem criptografada e usa sua chave privada para descriptografar e ler a mensagem. 

Como Bob é o único que possui as duas chaves correspondentes, ele pode ler a mensagem, garantindo a confidencialidade.

---
Agora, vamos considerar uma situação em que Alice precisa provar sua identidade a Bob. Ela pode usar a criptografia assimétrica como forma de autenticação.

- Alice usa sua chave privada, uma chave que só ela pode acessar, para criptografar uma mensagem. 

- Alice envia a mensagem criptografada para Bob, que usa a chave pública de Alice para descriptografá-la. 

- Bob sabe que somente Alice poderia ter enviado a mensagem, porque somente ela possui a chave privada que foi usada para criptografar a mensagem.

Resumidamente:

_Ao criptografar com a chave pública, somente a chave privada consegue descriptografar_

_Ao criptografar com a chave privada, somente a chave pública pode descriptografar_

Incrível né???

</Admonition>

### Problemas da Criptografia Assimétrica
Mas como nem tudo são flores, esse tipo de criptografia também não é perfeito e tem suas desvantagens.

A primeira desvantagem é o desempenho. Algoritmos assimétricos, como RSA e ECC, exigem operações matemáticas complexas, como exponenciação modular ou cálculos sobre curvas elípticas(Baita calculo gigante viu). Essas operações são mais lentas que as utilizadas em criptografia simétrica . Isso faz com que a criptografia assimétrica não seja viável para processar grandes volumes de dados diretamente, especialmente em sistemas com restrições de desempenho, como aplicações móveis, IoT ou conexões de rede em tempo real.(Sei que você tava taxando a criptografia simétrica como ruim até agora viu!)

A segunda limitação está no tamanho das chaves e do resultado cifrado. Chaves assimétricas são muito maiores (ex: 2048 ou 4096 bits para RSA, contra 128 ou 256 bits para AES) e, consequentemente, geram textos cifrados e assinaturas digitais proporcionalmente grandes. Isso impacta largura de banda, uso de memória e armazenamento.

Além disso, a criptografia assimétrica requer mecanismos de gerenciamento de confiança muito mais complexos. Para que uma chave pública possa ser usada com segurança, é preciso garantir que ela realmente pertence à entidade esperada. Isso exige a existência de infraestruturas de chave pública (PKI), com autoridades certificadoras (CAs), certificados digitais, cadeias de confiança e mecanismos de revogação. Tudo isso introduz complexidade operacional e vulnerabilidades indiretas. Vamos abordar isso com mais profundidade mais para frente.

## 2. Fundamentos Teóricos

Matematicamente, o processo de criptografia assimétrica é definido por duas funções fundamentais que envolvem dois pares de chaves complementares nos quais as operações são fáceis de executar, mas extremamente difíceis de inverter sem um dado específico (a chave privada).

_E(Kpub, P) = C → Cifra com a chave pública_

_D(Kpriv, C) = P → Decifra com a chave privada._

Onde:

**Kpub:** pode ser divulgada livremente para todo mundo que você quiser.

**Kpriv:** Essa qui você esconde de todo mundo.

**P:** mensagem em texto claro (plaintext)

**C:** mensagem cifrada (ciphertext)


Se está curioso para saber como tiveram a idéia de criar essa criptografia, recomendo fortemente ler a [wikipédia.](https://pt.wikipedia.org/wiki/Criptografia_de_chave_p%C3%BAblica)

## 3. Aplicações 

**Navegação na Web**

A maioria dos principais navegadores protege sessões da web por meio de protocolos que dependem significativamente de criptografia assimétrica, incluindo o Transport Layer Security (TLS) e seu antecessor, Secure Sockets Layer (SSL), que permitem HTTPS.

O navegador obtém a chave pública do site a partir de seu certificado TLS/SSL, enquanto o site mantém sua chave privada em segredo. O handshake inicial entre o navegador e o site usa a criptografia assimétrica para trocar informações e estabelecer uma chave de sessão segura.

Com a chave de sessão segura estabelecida, a conexão faz a transição para criptografia simétrica, para que a transmissão de dados seja mais eficiente.

---

**Assinaturas digitais**

As assinaturas digitais são uma das aplicações mais comuns e práticas da criptografia de chave assimétrica. Elas são essenciais para garantir autenticidade e integridade.

As assinaturas digitais garantem a autenticidade, confirmando que o documento vem genuinamente do signatário, da mesma forma que uma assinatura física. Elas garantem a integridade, assegurando que ninguém adulterou o documento em trânsito. 

As assinaturas digitais usam a criptografia assimétrica para criptografar o hash de um arquivo com uma chave privada. Um hash é uma sequência de caracteres que representa os dados do documento. Se alguém alterar o arquivo, o hash muda, alertando os usuários sobre a adulteração.

A criptografia de hash cria uma assinatura que qualquer pessoa pode verificar com a chave pública correspondente, garantindo a origem e a integridade do documento.

Os desenvolvedores de software também usam assinaturas digitais para verificar se o código não foi adulterado e confirmar a origem, o que ajuda a evitar a distribuição de softwares maliciosos.

---

**Autenticação**

A criptografia assimétrica pode ajudar os sistemas na autenticação de usuários e sites.

Por exemplo, o Secure Shell Protocol (SSH) usa criptografia de chave pública para verificar usuários que tentam acessar servidores remotos. Ele também oferece suporte a autoridades de certificação, que são terceiros que emitem certificados digitais para verificar a autenticidade de sites e outras entidades.

---
**Tecnologia blockchain**

A criptografia assimétrica é um pilar fundamental da tecnologia blockchain e contribui significativamente para a segurança e integridade das transações de criptomoedas. Ela ajuda a garantir que apenas os destinatários pretendidos possam acessar os ativos, gerenciando identidades por meio de chaves públicas e privadas e verificando a autenticidade das transações com assinaturas digitais.

A criptografia assimétrica também pode proteger contratos inteligentes, que são contratos autoexecutáveis com termos escritos diretamente no código. As chaves públicas e privadas criptografam e autenticam interações dentro desses contratos, garantindo que apenas os destinatários pretendidos possam executar o contrato e fazer valer os termos.

## 4. Algoritomos de Criptografia Simétrica comuns

- Rivest-Shamir-Adleman (RSA)

- Criptografia de curva elíptica (ECC)

- Algoritmo de assinatura digital (DSA)

### Rivest-Shamir-Adleman (RSA)

O RSA é um algoritmo de criptografia assimétrica que leva o nome de seus inventores. Ele se baseia na complexidade matemática dos números primos para gerar pares de chaves. Um par de chaves pública-privada é utilizado para criptografia e descriptografia, tornando esse algoritmo adequado para transmissão segura de dados e assinaturas digitais.

O algoritmo RSA ajuda na proteção de protocolos de comunicação, como HTTPS, SSH e TLS. Apesar de ter sido desenvolvido na década de 1970, o RSA continua sendo amplamente usado devido à sua robustez e segurança. Várias aplicações dependem do RSA, incluindo e-mail seguro, VPNs e atualizações de software.

### Criptografia de curva elíptica (ECC)

O ECC é um método de criptografia assimétrica baseado nas propriedades matemáticas de curvas elípticas sobre campos finitos. A criptografia de curva elíptica (ECC) oferece segurança comparável à da RSA (Rivest-Shamir-Adleman) com chaves significativamente menores. Isso se traduz em cálculos mais rápidos, menor uso de memória e maior eficiência em dispositivos com recursos limitados. 

### Algoritmo de assinatura digital (DSA)
O algoritmo de assinatura digital (DSA) permite que organizações e pessoas criem assinaturas digitais que garantam a autenticidade e integridade de mensagens ou documentos.

Padronizado pelo NIST, o DSA baseia-se no problema matemático do logaritmo discreto e aparece em vários protocolos de segurança. O DSA é frequentemente usado em aplicações que exigem assinatura e verificação seguras de documentos, incluindo distribuição de software, transações financeiras e sistemas de votação eletrônica.

## 5. Exemplo Pŕatico
Vamos testar um cógigo com python para demonstrar para vocês.

``` python
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import serialization, hashes

# 1. Gerar par de chaves (privada e pública)
private_key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=2048,
)

public_key = private_key.public_key()

# 2. Mensagem a ser cifrada
plaintext = "Este é um dado sensível".encode("utf-8")

# 3. Cifrar com a chave pública
ciphertext = public_key.encrypt(
    plaintext,
    padding.OAEP(  # Padding seguro
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)

# 4. Decifrar com a chave privada
decrypted = private_key.decrypt(
    ciphertext,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)

# 5. Mostrar resultados
print("Texto original:", plaintext.decode("utf-8"))
print("Texto cifrado:", ciphertext)
print("Texto decifrado:", decrypted.decode("utf-8"))

```

<Admonition type="caution" title="Atenção!">

A realidade é que ninguém usa criptografia assimétrica sozinha para proteger dados. Ela é combinada com a simétrica num modelo híbrido, que funciona assim:

- Troca segura de uma chave simétrica via algoritmo assimétrico (RSA, ECDH)

- Cifragem dos dados com algoritmo simétrico (AES-GCM, ChaCha20)

- Verificação da identidade via assinaturas digitais

Então em sistemas reais, adota-se a criptografia híbrida: usa-se a criptografia assimétrica apenas para trocar com segurança uma chave simétrica, que então é utilizada para criptografar os dados de forma rápida e eficiente. Esse modelo combina a segurança da criptografia pública com o desempenho da simétrica, sendo a base de protocolos como HTTPS, que vocês usam em aplicações Web.

---

Por exemplo:

- Alice gera um par de chaves públicas e privadas. Ela compartilha a chave pública com Bob.

- Bob gera uma chave simétrica.

- Bob usa a chave pública de Alice para criptografar a chave simétrica, e então envia a chave criptografada para Alice. Se um agente de ameaça interceptar a chave em trânsito, ele não poderá usá-la porque não conseguirá descriptografá-la.

- Alice recebe a chave criptografada e usa sua chave privada para descriptografá-la. Agora, Alice e Bob têm uma chave simétrica compartilhada.

</Admonition>

<Admonition type="tip" title="Exercício 1 — Aplicação ">
Aproveitando que não demonstrei muitos tipos de criptografia Assimétricas, recomendo que procurem por outras para aumentar o repertório de vocês, não se esqueçam de checar se elas estão obsoletas ou não.

Outra coisa, tentem responder essas perguntas:

- Como evitar ataques de intermediário durante a troca de chaves?

- Como escolher o tamanho da chave e algoritmo assimétrico ideal sem prejudicar o desempenho?

</Admonition>