SHA-1, SHA-2 e SHA-3 — A linha de frente das funções de hash
Você já entendeu que hash não é cifra, não é compressão, não é mágica.
Hash é compromisso matemático com integridade. É o “carimbo de autenticidade” dos dados.

E quando falamos em hash moderno, um sobrenome aparece em quase tudo: SHA (Secure Hash Algorithm).

Mas cuidado: nem todo SHA é igual, e entender a diferença entre SHA-1, SHA-2 e SHA-3 é essencial para qualquer profissional sério em segurança digital.

SHA-1 — O começo da confiança (e o começo do fim)
Nos anos 90, a NSA e o NIST publicaram o SHA-1:

160 bits de digest

Estrutura Merkle-Damgård

Segurança razoável para a época

Foi adotado por tudo:

SSL, GPG, git, certificados digitais.
Era o hash da internet.

Mas a criptoanálise não dorme.

Pesquisadores começaram a identificar fraquezas teóricas.
E em 2017, o Google e o CWI Amsterdam concretizaram:

SHAttered mostrou uma colisão real.
Duas entradas distintas → mesmo hash SHA-1.

O custo? 110 GPUs por um ano.
Caro para um estudante. Barato para um Estado.

Resultado:

Navegadores rejeitaram certificados com SHA-1

Git precisou evoluir

SHA-1 foi aposentado da linha de frente

SHA-2 — A resposta robusta
A reação veio em 2001: o NIST lançou o SHA-2, uma família de funções com variantes ajustáveis:

Variante	Digest (bits)	Bloco (bits)
SHA-224	224	512
SHA-256	256	512
SHA-384	384	1024
SHA-512	512	1024
SHA-512/224	224	1024
SHA-512/256	256	1024

Essas versões continuam com a estrutura Merkle-Damgård, mas com:

Compressão mais robusta

Constantes internas mais sofisticadas

Expansão de mensagem mais segura

Até hoje, não há colisões conhecidas em SHA-2.
É o padrão em:

Certificados digitais (CA/B Forum)

Sistemas Linux (sha256sum)

Blockchain (Bitcoin usa duplo SHA-256)

SHA-2 é o hash confiável da atualidade.
Seguro, eficiente, adotado. Mas... ainda com herança estrutural da geração anterior.

SHA-3 — A reinvenção necessária
Se SHA-2 ainda é seguro, por que criar o SHA-3?

Porque confiança não se herda. Se constrói.
SHA-3 veio de um concurso internacional do NIST, com foco em resistência estrutural.
Quem venceu? O algoritmo belga Keccak.

Keccak (lê-se “kétchák”) trouxe uma estrutura nova:

Sponge Construction
Absorve os dados em um estado interno

Executa permutações pesadas

“Escoa” (squeeze) os bits finais como digest

A principal vantagem?

SHA-3 é imune a ataques de extensão de comprimento, algo que afeta todos os hashes baseados em Merkle-Damgård.

SHA-3 na prática:
Variante	Digest (bits)	Estrutura	Observações
SHA3-224	224	Sponge	Seguro para KDFs e autenticação
SHA3-256	256	Sponge	Compatível com SHA-2 na saída
SHA3-384	384	Sponge	Alta segurança
SHA3-512	512	Sponge	Ideal para dados ultra sensíveis

Além disso, temos os XOFs:

SHAKE128

SHAKE256

Output de tamanho variável. Perfeito para sistemas com restrições ou para gerar múltiplas chaves de um mesmo input.

Comparando SHA-1, SHA-2 e SHA-3
Característica	SHA-1	SHA-2	SHA-3
Ano de lançamento	1995	2001	2015
Digest	160 bits	224–512 bits	224–512 bits (fixo) + XOF
Estrutura	Merkle-Damgård	Merkle-Damgård melhorado	Sponge (Keccak)
Status de segurança	Quebrado	Seguro atualmente	Seguro, nova geração
Vulnerável a extensão de comprimento	Sim	Sim	Não
Casos de uso	Obsoleto	Certificados, blockchain, arquivos	IoT, KDFs, pós-quântica

Conclusão — Escolha o SHA que seu projeto merece
SHA-1 é morto. Ainda roda por aí? Sim. Mas está podre por dentro.

SHA-2 é o cavalo de batalha moderno. Rápido, seguro e confiável.

SHA-3 é a armadura do futuro, com uma arquitetura feita para durar — mesmo diante da computação quântica ou ataques estruturais.

Se você está desenvolvendo sistemas modernos:

Use SHA-2 para compatibilidade.

Use SHA-3 quando puder exigir o melhor.