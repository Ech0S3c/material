HMAC e JWT — Quando assinar é mais importante que esconder
Vamos começar com uma pergunta simples, mas essencial:
Como você garante que uma mensagem veio de quem deveria vir e não foi alterada no caminho?

Você poderia criptografar, certo? Mas nem sempre criptografia é a resposta certa. Às vezes, o que você quer é garantir a integridade da mensagem — e autenticar sua origem — sem necessariamente escondê-la.

E é aí que entra o HMAC.
E logo depois dele, o JWT.

HMAC: integridade e autenticidade na veia
O HMAC (Hash-based Message Authentication Code) é tipo aquele carimbo digital que você coloca numa mensagem para garantir duas coisas:

Ninguém mexeu na mensagem desde que ela saiu de você

A mensagem veio de quem diz ter vindo

Como ele faz isso?
Com uma função de hash (como SHA-256) combinada com uma chave secreta compartilhada entre as partes.

Pensa assim: é como se a mensagem fosse passada por uma prensa que imprime uma marca invisível, mas que só quem tem a tinta certa (a chave secreta) consegue gerar. Qualquer tentativa de falsificar ou modificar a mensagem quebra a assinatura.

Como o HMAC funciona?
Ele é inteligente — e mais elaborado do que simplesmente fazer SHA256(chave + mensagem) (que, por sinal, seria uma péssima ideia).

A estrutura:
A chave é combinada com um inner pad (ipad).

Essa combinação é concatenada com a mensagem e passada pela função de hash.

O resultado é concatenado com a chave + outer pad (opad).

Tudo isso é passado de novo pela função de hash.

Em notação formal:

mathematica
Copiar
Editar
HMAC(K, M) = H((K ⊕ opad) ∥ H((K ⊕ ipad) ∥ M))
Essa “dupla camada” serve para proteger contra ataques conhecidos às funções de hash (tipo o length extension attack, comum com SHA-1 ou MD5).

A beleza do HMAC é que, mesmo que o hash em si tenha fraquezas, o uso da chave secreta e do padding dificulta bastante a vida do atacante.

E onde isso entra no mundo real?
Entra aqui: JWT — JSON Web Token

JWT: o crachá do usuário moderno
O JWT é como um crachá digital.
Quando o usuário faz login, o sistema gera um token com informações codificadas sobre ele — e assina isso com HMAC. O resultado? Um pacote leve, seguro e autocontido que o cliente pode carregar com ele.

Um token típico tem essa estrutura:

nginx
Copiar
Editar
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvZSIsImlhdCI6MTUxNjIzOTAyMn0
.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
São três partes separadas por ponto:

Header – que diz “estou usando HMAC-SHA256”

Payload – que contém claims como ID do usuário, tempo de expiração, permissões

Signature – que é o HMAC de tudo isso, usando a chave secreta

No lado do servidor, ao receber esse token em uma requisição, ele refaz a assinatura e compara com a recebida. Se bateu, está tudo certo. Se não bateu, alguém tentou falsificar.

Mas tem um detalhe importante...
JWTs não são criptografados por padrão.
Ou seja, qualquer um pode decodificar e ler o conteúdo do token (header e payload).
Mas ninguém pode modificá-lo sem invalidar a assinatura, a menos que tenha a chave secreta.

Se você precisa de sigilo, aí entra o JWE (JSON Web Encryption) — que encapsula o JWT numa estrutura criptografada. Mas se o foco é autenticação e integridade, o bom e velho HMAC no JWT dá conta do recado.

Aplicações práticas
Você encontra HMAC + JWT em praticamente qualquer sistema web moderno:

APIs RESTful com autenticação stateless

Sistemas de login onde o servidor não mantém sessão

Tokens de autenticação em SPAs (Single Page Applications)

Integrações com OAuth2 e OpenID Connect

Verificação de integridade de mensagens assíncronas

Tudo isso rodando, confiando que a assinatura foi gerada com a chave correta, e que ninguém meteu a mão no caminho.

Vulnerabilidades? Sim. Mas evitáveis.
HMAC é seguro, mas implementação importa. Aqui vão alguns erros clássicos:

Chave fraca ou previsível → qualquer um pode gerar tokens válidos.

Chave exposta no frontend → não precisa nem de força bruta.

Aceitar alg: none no header → clássico ataque onde o servidor simplesmente não verifica a assinatura.

Não validar a expiração (exp) → tokens válidos para sempre. Parabéns, você criou um backdoor.

O segredo do sucesso com JWT + HMAC está em validar tudo com critério.

Resumo da ópera
Componente	Função
HMAC	Garante integridade + autenticidade da mensagem
JWT	Estrutura leve para transportar informações com assinatura digital

Juntos, formam um dos pilares da segurança moderna em aplicações web.

Você pode pensar no HMAC como o carimbo digital.
E no JWT como o envelope lacrado com esse carimbo.

Não é blindado — qualquer um pode ler — mas só quem tem o selo certo consegue lacrar de novo.

