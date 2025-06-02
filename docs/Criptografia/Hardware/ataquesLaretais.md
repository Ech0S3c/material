---
title: Ataques de Canais Laterais
sidebar_position: 1
---
import Admonition from '@theme/Admonition';

# Canais Laterais — Quando o algoritmo é seguro, mas o mundo físico não colabora

Você estudou alguns algorítmos até aqui, certo?
RSA, AES, ECC, ...

Agora vem a parte que eu te mostro como algum desocupado pode quebrar seu sistema, isso tudo porque temos um pequeno grande problema:

“Você pode ter o algoritmo perfeito. Mas se ele rodar no mundo real, ele vaza.”

Essa é a ideia por trás dos ataques por canais laterais, ou side chanel.

## 1. O que são canais laterais?

Em um mundo ideal, algoritmos criptográficos operam como abstrações puras.
Mas no mundo real, eles são executados em chips, circuitos, cabos, memória e processadores.

E esses dispositivos:

- Consomem energia

- Geram calor

- Vibram em frequência

- Vazam tempo de execução

- Alguns emitem até radiação


E tudo isso pode conter pistas sobre os dados que estão sendo processados — inclusive segredos como chaves privadas.

Essa é a base do ataque de canal lateral. Não atacar o algoritmo. Mas observar o que o hardware revela sem querer. - _Imagine o doido que pensou em fazer isso primeiro?_

<details>
<summary><b>Timing Attacks — O tempo como informante</b></summary>

Suponha que uma função criptográfica leve mais tempo para processar certos dados.

Por exemplo:
Se a verificação de uma chave privada depende da posição de certos bits e isso muda o tempo de execução, o atacante pode medir esse tempo e inferir a chave.

Foi exatamente isso que Paul Kocher demonstrou em 1996 contra implementações de RSA.
Inclusive quem quiser ler o artigo dele: https://paulkocher.com/doc/TimingAttacks.pdf
</details>

<details>
<summary><b>Power Analysis — Energia como canal de vazamento</b></summary>

Todo circuito consome energia para operar. Mas não é um consumo plano.
Operações diferentes consomem quantidades diferentes de energia.

Ataques como o Differential Power Analysis (DPA) usam isso para quebrar criptografias

O atacante mede o consumo de energia durante várias execuções do algoritmo com entradas diferentes.

Usa técnicas estatísticas para correlacionar consumo e bits secretos.

Simplesmente observando o padrão de consumo, é possível inferir partes da chave.

Essa técnica é usada com sucesso contra smartcards, carteiras criptográficas, tokens de autenticação — e qualquer dispositivo onde o atacante tenha controle físico próximo.
</details>

<details>
<summary><b> Emissão Eletromagnética — Escuta sem contato</b></summary>

Se energia vaza por fio, sinais também podem vazar pelo ar.
Isso dá origem aos ataques por análise eletromagnética (EMA).

Aqui, o invasor usa sondas ou antenas para captar radiações emitidas pelos componentes enquanto processam dados criptográficos.

Em ambientes como agências governamentais ou centros militares, a mitigação é feita com:

- Blindagem física

- Separação eletromagnética

- Design TEMPEST

Isso porque até as emissões invisíveis podem trair os dados.
</details>

<details>
<summary><b> Cache Attacks — Espionagem entre processos</b></summary>

Agora vamos para os ataques de canal lateral sem acesso físico.

Em ambientes como computação em nuvem, múltiplos usuários compartilham o mesmo processador.
E com isso, também compartilham cache.

Se o tempo de acesso ao cache for afetado por operações de outros processos, então o invasor pode observar padrões de acesso e inferir:

- Dados sensíveis

- Execução de código privilegiado

- Até mesmo conteúdo de memória de outros processos

Esse é o princípio por trás de Spectre, Meltdown e derivados.
Essas vulnerabilidades mostraram que mesmo sem acesso root, é possível espionar o kernel — explorando apenas o comportamento físico do cache.
</details>

<details>
<summary><b>Fault Injection — Ataque ativo com precisão cirúrgica</b></summary>

Nem todo ataque lateral é passivo.

Com fault injection, o atacante provoca falhas deliberadamente:

Reduz a voltagem

Aumenta a temperatura

Aplica radiação (laser, glitch de clock)

Interfere no processo de assinatura ou decriptação

O objetivo?
Forçar o sistema a cometer um erro, como gerar uma assinatura incorreta.

Se isso acontece, o atacante pode aplicar técnicas matemáticas (como fatoração com assinaturas inválidas) e extrair a chave secreta.

Foi esse tipo de ataque que desmontou vários hardwares criptográficos — mesmo quando os algoritmos eram teoricamente seguros.
</details>

| **Tipo de Ataque**                            | **Descrição**                                                                                | **Vulnerável a**                                             | **Contramedidas**                                                                                    |
| --------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| **Timing Attack**                             | Medição do tempo de execução de operações para inferir dados secretos.                       | Branches condicionais baseados em chaves ou dados sensíveis. | Implementações com tempo constante (constant-time); balanceamento de execuções.                      |
| **Simple Power Analysis (SPA)**               | Observação direta do consumo de energia durante uma única execução.                          | Operações com padrões de energia distintos.                  | Circuitos balanceados; masking de dados; execução uniforme.                                          |
| **Differential Power Analysis (DPA)**         | Análise estatística de consumo de energia ao longo de várias execuções para extrair padrões. | Variações sutis no consumo de energia entre execuções.       | Randomização de dados intermediários; uso de hardware com proteção a DPA; injeção de ruído.          |
| **Electromagnetic Analysis (EMA)**            | Coleta de emissões eletromagnéticas durante a operação de um chip.                           | Dispositivos sem blindagem eletromagnética.                  | Blindagem física (Faraday cage), isolamento EM (TEMPEST), uso de encapsulamento seguro.              |
| **Cache Timing (Prime+Probe, Flush+Reload)**  | Medição do tempo de acesso ao cache compartilhado para inferir acessos de outros processos.  | Sistemas compartilhando cache entre usuários/processos.      | Isolamento de processos críticos; limpeza de cache; uso de hardware com proteção contra especulação. |
| **Fault Injection (Voltage, Clock, Laser)**   | Indução de falhas físicas controladas para causar erros e explorar respostas incorretas.     | Falta de detecção de erros, validação de resultados.         | Detecção e resposta a falhas; checks redundantes; autenticação criptográfica de dados internos.      |
| **Branch Prediction / Speculative Execution** | Exploração da execução especulativa da CPU para extrair dados temporários.                   | Processadores modernos com execução especulativa.            | Patches de microcódigo; técnicas de isolamento; mitigação via software (e.g. Retpoline, LFENCE).     |


## 2. Onde tudo isso é aplicado?

Dispositivos mais vulneráveis:

- Smartcards

- Carteiras de criptomoedas

- Terminais de pagamento

- Dispositivos IoT

- Hardware embarcado em ambientes industriais

Se você pensa que acabou, o escopo vai além:
Ambientes de nuvem, servidores remotos, aplicativos web — todos podem sofrer com canais laterais baseados em tempo, cache, especulação e competição por recursos.

Se ainda não acredita que esse tipo de ataque é possível, vou deixar um vídeo do [OWASP Foundation](https://www.cloudflare.com/pt-br/learning/security/threats/owasp-top-10/)(Se você esqueceu do que se trata, recomendo que jogue no google esse nome)
<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/1RipwqJG50c?si=a3MVHxJqPL-Y-nIJ"
  title="Um pouco sobre Canais laterais"
  frameBorder="0"
  allowFullScreen
 ></iframe>

### 2.1 Como se proteger?

Não existe maneira única, mas sim um conjunto de boas práticas que, combinadas, oferecem uma boa resistência:

---
Implementações de tempo constante: 
Evite qualquer if ou branch que dependa de segredos.

---

Injeção de ruído:
Introduzir aleatoriedade ou jitter deliberado para desincronizar medições.

---
Blindagem física e eletromagnética: 
Principalmente para dispositivos portáteis e tokens.

---
Randomização de execução: 
Variações no local da memória, ordem das operações, masking.

---
Detecção e resposta a falhas: 
Resetar ou travar o sistema ao detectar comportamento anômalo.

---
Auditoria formal: 
Revisão matemática e física do comportamento do sistema — especialmente em ambientes críticos.


## 3. Conclusão
Canais laterais não são só uma curiosidade teórica, são uma das maiores ameaças reais à segurança de sistemas criptográficos modernos.

Então espero que terminem essa sessão entendo uma coisa

_Não basta confiar no algoritmo. Você precisa confiar no ambiente onde ele roda._

Você pode dominar AES, RSA, ECC. Mas se ignorar os canais laterais, sua aplicação pode ser desmontada com um osciloscópio, uma antena... ou um temporizador.

