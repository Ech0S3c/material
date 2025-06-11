

bcrypt, Argon2, HKDF e EdDSA — Quatro pilares da criptografia aplicada
Depois de aprender sobre criptografia simétrica, assimétrica, curvas elípticas, modos de operação e assinaturas, você pode se perguntar:

“Onde tudo isso se aplica de verdade, quando saímos do algoritmo puro e caímos na realidade de sistemas modernos?”

A resposta está aqui.
Em como você armazena senhas.
Em como deriva chaves seguras a partir de um segredo bruto.
Em como assina dados com segurança sem implodir com um erro de nonce.

É aqui que entram bcrypt, Argon2, HKDF e EdDSA. Cada um com uma função específica, mas todos fundamentais para um sistema criptográfico robusto.

bcrypt — Segurança por lentidão deliberada
Na década de 1990, o bcrypt apareceu com uma proposta simples:

“E se fizermos o hash da senha ser lento de propósito?”

Isso pode parecer contraintuitivo, mas faz todo sentido.
Ao tornar o processo de hash computacionalmente custoso, o bcrypt dificulta ataques de força bruta e dicionário — mesmo que o atacante já tenha os hashes armazenados.

O que torna o bcrypt útil?
Fator de custo ajustável: você define quantas rodadas de processamento o algoritmo executa.

Salt embutido: bcrypt já adiciona automaticamente um salt aleatório de 128 bits, o que evita rainbow tables.

Saída determinística: mesmo algoritmo, mesma senha e mesmo salt → mesmo hash.

Limitações?
O bcrypt foi projetado para CPU, e seu uso de memória é relativamente baixo.

Isso o torna vulnerável a ataques com hardware paralelo (GPUs, FPGAs, ASICs).

Ainda é amplamente usado, mas não é mais o estado da arte.

Argon2 — O novo padrão ouro para hashing de senhas
A resposta à era das GPUs veio com o Argon2, vencedor da Password Hashing Competition (PHC) de 2015.

Ele vai além do que o bcrypt fazia:

“Não basta ser lento. Tem que ser faminto por memória. Tem que escalar com paralelismo. Tem que ser moderno.”

Por que o Argon2 é o atual favorito?
Três modos distintos:

Argon2d: resistente a ataques de canal lateral

Argon2i: resistente a ataques de timing

Argon2id: híbrido, o mais recomendado na prática

Parâmetros ajustáveis: tempo, memória e paralelismo

Altíssima resistência contra ataques com hardware especializado

Seguro mesmo em ambientes de alta concorrência

Com Argon2, você tem controle.
E num cenário onde senhas são o ponto de entrada de 90% dos sistemas, isso é essencial.

HKDF — A arte de derivar chaves com segurança
Imagine que você tenha uma chave mestra. Um segredo bruto.
Mas precise de várias chaves menores: uma para cifragem, outra para MAC, outra para autenticação.

Você não quer simplesmente truncar a chave. Isso seria perigoso.
Você quer derivar essas chaves com segurança.
É aqui que entra o HKDF (HMAC-based Key Derivation Function).

Como funciona o HKDF?
Extract: Pega a chave original e passa por um HMAC com um salt → gera uma chave pseudorrandômica.

Expand: Usa essa chave para gerar quantas subchaves forem necessárias.

É seguro, modular e amplamente usado em TLS, Signal, TLS 1.3, QUIC.
E como depende do HMAC, herda suas propriedades de resistência a colisões e ataques de extensão de comprimento.

HKDF é o “canivete suíço” da derivação de chave.
Funciona bem, é confiável, e está por trás dos protocolos que você usa todo dia sem nem perceber.

EdDSA — A nova geração das assinaturas digitais
Por muito tempo, o ECDSA dominou a cena das assinaturas digitais com curvas elípticas.
Mas ele tinha um calcanhar de aquiles: o nonce aleatório.

Uma má geração de nonce = chave privada exposta.
Foi assim que o Playstation 3 foi hackeado.

O EdDSA (Edwards-curve Digital Signature Algorithm) surgiu com uma solução brilhante:

“Vamos tornar o nonce determinístico. Derivado da mensagem e da chave privada. Ponto.”

Por que EdDSA é revolucionário?
Determinístico: sem riscos com geradores aleatórios ruins

Mais rápido que ECDSA e RSA

Baseado em curvas como Curve25519/Ed25519

Menos suscetível a ataques de canal lateral

Simples de implementar corretamente

Em um mundo onde falhas de implementação são a regra, EdDSA oferece um modelo mais robusto.

Tudo isso se conecta
Função	Ferramenta	Por quê?
Armazenar senhas	bcrypt, Argon2	Proteger contra ataque offline e rainbow tables
Derivar chaves com segurança	HKDF	Garantir múltiplas chaves com independência e segurança
Assinar dados	EdDSA	Autenticidade sem vazamento, com performance

Esses algoritmos não são substitutos uns dos outros — eles formam camadas complementares.

Num sistema moderno:

O usuário digita a senha → você aplica Argon2 para gerar um hash seguro.

A autenticação falha? Nada mais acontece.

A autenticação passa? Você usa HKDF para gerar chaves de sessão.

Vai transmitir algo sensível? Use EdDSA para assinar, com segurança e leveza.

Conclusão
Entrar no mundo da criptografia moderna não é apenas entender o AES ou o RSA.
É saber como construir todo o ecossistema com peças especializadas, testadas, e ajustadas ao cenário atual de ameaças.

Você precisa saber quando usar cada uma dessas ferramentas.
Mais do que isso — precisa entender por que elas foram criadas.

Porque no fim, segurança de verdade não vem só da matemática.
Vem da escolha certa para o problema certo, com a implementação certa.

E quando você junta Argon2, HKDF e EdDSA, o que você tem é mais que código.
É engenharia de segurança feita do jeito certo.

