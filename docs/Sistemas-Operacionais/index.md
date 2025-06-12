---
title: Sistemas Operacionais 
sidebar_position: 5
---

import Admonition from '@theme/Admonition';

# Sistemas Operacionais

&emsp; Quando ligamos um computador ou um celular, esperamos que tudo funcione: os aplicativos abrem, arquivos são salvos, vídeos rodam e a internet responde. Mas para que tudo isso ocorra de maneira eficiente, organizada e segura, é necessário um componente essencial: o Sistema Operacional, ou simplesmente S.O.

&emsp; Ele é, literalmente, o "sistema que opera" a máquina. Sem ele, o hardware seria incapaz de compreender ou executar qualquer comando.Sem ele, o hardware seria só um monte de componentes esperando ordens que não entendem. Mas o que exatamente é esse tal de sistema operacional? 


## 1. O Que é um Sistema Operacional?
Um Sistema Operacional é um conjunto de softwares que gerencia os recursos físicos e lógicos de um computador, funcionando como uma ponte entre o hardware e os programas de aplicação. Ele permite que o usuário interaja com a máquina de forma amigável, seja através de uma interface gráfica (GUI), seja por meio de comandos em um terminal (CLI).

```Mas e o Kernel, onde entra nisso?```

Opa! se já sabe o que é um kernel está no caminho certo.

Mas para quem não sabe: **O Kernel é o núcleo central do sistema operacional**. Ele é o componente que realmente interage diretamente com o hardware. Pode-se dizer que o kernel é o "coração" do sistema operacional — o intermediário direto entre o hardware e o restante do software.

---
<iframe width="100%" height="450" src="https://www.youtube.com/embed/C6qMnRDKOBc?si=fsNBnyBSDq_QpklR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---


Em resumo:

- O Sistema Operacional é o todo: **kernel + utilitários + bibliotecas + interfaces.**

- O Kernel é a**parte central e mais privilegiada**, que gerencia **acesso à CPU, memória, disco, dispositivos e segurança.**

Se ainda não ficou claro, pense no sistema operacional como uma empresa. O kernel é o setor operacional, que executa as ordens. Os softwares utilitários e interfaces são o setor administrativo, que lida com os clientes (usuário e aplicativos).

## 2. Funções Principais de um Sistema Operacional
- **Gerenciamento de Processos:** O S.O. é responsável por criar, agendar, pausar e encerrar processos (ou seja, programas em execução). Ele garante que cada aplicação tenha acesso justo ao processador (CPU) e que uma aplicação mal comportada não "trave" o sistema inteiro.

- **Gerenciamento de Memória:** Todo programa precisa de memória RAM para funcionar. O S.O. distribui a memória entre os processos, rastreia o que está sendo usado, e impede que um programa invada a memória de outro (algo crítico para segurança).

- **Gerenciamento de Dispositivos de Entrada e Saída (I/O):** O S.O. oferece uma camada de abstração entre os programas e os dispositivos físicos como teclado, mouse, disco rígido, placa de vídeo e impressora. Essa camada garante compatibilidade, controle de acesso e segurança.

- **Gerenciamento de Sistema de Arquivos**
Ao salvar, abrir, excluir ou editar um arquivo, é o sistema operacional que organiza os dados fisicamente no disco. Ele também cuida da integridade dos arquivos e aplica permissões de acesso — fundamental em sistemas multiusuário.

- **Segurança e Controle de Acesso**
O S.O. implementa controle de permissões, autenticação, isolamento de processos e políticas de segurança que são a primeira barreira contra malwares, ataques e acessos indevidos.

Em sistemas operacionais modernos, inclusive, o modelo de segurança é baseado em privilégios mínimos e compartimentação, o que significa que cada processo e usuário só deve ter acesso ao que realmente precisa.

## 3. Arquitetura de um Sistema Operacional
Um sistema operacional moderno é dividido em duas grandes áreas: o kernel space (espaço do núcleo) e o user space (espaço do usuário). Essa divisão é estratégica: protege o sistema de falhas e ataques.

**Kernel:** Interage diretamente com o hardware. Pode ser:

- **Monolítico (Linux, Unix tradicional):** tudo em um único bloco.

- **Microkernel (Minix, QNX):** o mínimo possível no núcleo; o resto roda em espaço de usuário.

**Espaço de Usuário (User Space):**

- Bibliotecas de sistema (libc, glibc)

- Ferramentas administrativas e utilitários (ls, cp, top, etc.)

- Interface gráfica ou terminal

- Aplicativos (navegadores, editores de texto, etc.)

---
<iframe width="100%" height="450" src="https://www.youtube.com/embed/3hYy76Jc5u8?si=_T5fPyF3fo9afd9T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

<iframe width="100%" height="450" src="https://www.youtube.com/embed/KWtHeE4wpac?si=4etgyxH3Jok8gVx9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

<Admonition type="caution" title="Importante "> 
só o kernel tem acesso total ao hardware. Programas comuns não podem mexer diretamente no disco, na memória ou na CPU — e isso é ótimo. A ideia é que, se algo der errado, o estrago seja contido.
</Admonition>

## 4. Um Pouco da História dos Sistemas Operacionais

Nos primeiros computadores (décadas de 1940-50), não existia sistema operacional. Cada programa precisava ser carregado manualmente na memória, e o controle era feito via cartões perfurados ou interruptores físicos.

Com o avanço da computação, surgiram os sistemas de batch, depois os sistemas com múltiplos usuários e multitarefa, e finalmente os sistemas interativos, com interface gráfica.

- **Sistemas de batch (anos 60):** vários programas em sequência.

- **Multiusuário e multitarefa (anos 70):** vários usuários e programas ao mesmo tempo.

- **Interativos:** com interface gráfica (anos 80–90).

Marcos importantes:

- **UNIX (1970s):** introduziu muitos conceitos que usamos até hoje (multiusuário, hierarquia de arquivos, permissões).

- **Windows (1985+):** popularizou a computação pessoal.

- **Linux (1991):** um clone livre do UNIX, com código aberto e foco em segurança, estabilidade e liberdade.

Hoje, temos várias famílias de sistemas operacionais:

- **Windows** (usuário final, corporativo)

- **Linux** (servidores, segurança, nuvem, IoT)

- **macOS** (Apple, baseado em UNIX)

- **Android** (mobile, baseado em kernel Linux)

FreeBSD, QNX, OpenWrt, entre outros vários. São muitos os Sistemas Operacionais que existem, se tiver curiosidade e quiser ver, por sorte alguém já teve o ~cornojob~ trabalho de listar tudo:

[Árvore Sistemas Operacionais](https://eylenburg.github.io/os_familytree.htm)

## 5. E o Que Isso Tem a Ver com Segurança da Informação?

Absolutamente tudo. O sistema operacional é o terreno onde todos os ataques, defesas e investigações forenses acontecem.

```Por que o profissional de segurança precisa dominar sistemas operacionais?```

- Para entender como malwares se instalam e se escondem.

- Para aplicar hardening (reforço de segurança) baseado em CIS Benchmarks ou STIGs.

- Para configurar corretamente permissões, logs e auditoria.

- Para saber como funciona a elevação de privilégios (privilégio de root/admin).

- Para analisar comportamentos suspeitos no sistema de arquivos, processos e memória.

- Para utilizar ferramentas como iptables, auditd, ps, top, netstat, systemctl, etc.

Um bom profissional de segurança sabe como proteger um sistema de dentro pra fora, e isso começa por entender o sistema operacional a fundo, especialmente Linux — que é **dominante em servidores, dispositivos de rede, containers e ambientes em nuvem.**

## Conclusão


Sistemas operacionais são muito mais do que “aquele fundo de tela” onde abrimos nossos programas. Eles são a infraestrutura base da computação moderna e o ponto central da segurança digital.

Compreender o que é um sistema operacional, como ele funciona internamente e o papel do kernel, é o primeiro passo para dominar áreas como:

- Pentest

- Análise forense

- Resposta a incidentes

- Segurança de redes

- Segurança em nuvem

- Administração de servidores

<Admonition type="caution" title="Importante!"> 
Nesse material Irei abordar somente Windows e e Sistemas Linux!
Se quiser aprofundar em outros como MAC, recomendo que procure materiais na internet.

O site do Hack the Box Academy tem alguns mini cursos de MAC e Andoid.
</Admonition>