---
title: Compreendendo Ataques e CIR
sidebar_position: 3
---

import Admonition from '@theme/Admonition';


# 3. Compreendendo os Ataques: Como um Incidente de Segurança Acontece?

Agora que você já tem uma boa ideia do que é cybersecurity e conheceu as trilhas profissionais mais comuns, é hora de entender **como as coisas acontecem no “campo de batalha”**.

Vamos sair um pouco da teoria e olhar para **o ciclo de um ataque cibernético real**. A ideia aqui não é te transformar em um atacante, mas sim te ensinar a **pensar como um**, porque é só assim que você vai conseguir se defender (ou simular ataques, se escolher o caminho ofensivo).

---

## 🧩 O Ciclo de Vida de um Ataque

Embora o mundo dos ataques cibernéticos seja cheio de variações e nuances, muitos deles seguem um roteiro básico, conhecido como **kill chain** (cadeia de morte, no jargão militar — pois representa as etapas que levam à neutralização de um alvo).

Aqui está uma versão simplificada e adaptada da **Cyber Kill Chain**, modelo criado pela Lockheed Martin:

---

### 1. **Reconhecimento (Reconnaissance)**

O atacante coleta o máximo de informações possível sobre o alvo.  
Isso pode incluir:

- Endereços IP, subdomínios, emails expostos
- Funcionários no LinkedIn
- Vazamentos anteriores na dark web
- Páginas públicas com informações técnicas (robots.txt, headers HTTP...)

---

### 2. **Enumeração e Mapeamento (Scanning & Enumeration)**

Aqui o atacante começa a testar o que está exposto:

- Quais portas estão abertas?
- Quais serviços estão rodando?
- Qual versão de software está sendo usada?

---

### 3. **Ganho de Acesso (Exploitation)**

Com as vulnerabilidades mapeadas, é hora de explorar:

- Uma falha de software (ex: SQL Injection, RCE)
- Um serviço desatualizado com CVE conhecido
- Uma credencial vazada

---

### 4. **Escalada de Privilégios**

Se o atacante entrou como um usuário comum, ele tenta virar administrador/root.  
Isso permite:

- Acesso a mais dados
- Instalação de backdoors
- Persistência no sistema

---

### 5. **Exfiltração de Dados ou Persistência**

Agora o atacante:

- Rouba dados
- Se mantém no sistema sem ser detectado
- Implanta um ransomware ou cria uma conta oculta

---

### 6. **Cobertura de Rastros (Covering Tracks)**

Apagam-se logs, deletam-se arquivos, limpam-se vestígios.  
Objetivo: sair (ou ficar) sem ser notado.

---

<Admonition type="info" title="Dica: Visualize o processo!">
  Um vídeo rápido para ilustrar um ataque real:  
  <iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/yv3vPIaSf1w"
  title="YouTube Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
 ></iframe>
</Admonition>

---

## Exemplo Prático: Invasão de um e-commerce

Imagine o seguinte cenário:

1. Um atacante faz uma busca por subdomínios do e-commerce usando `amass`.
2. Ele encontra um subdomínio de teste (`dev.empresa.com`) com um CMS desatualizado.
3. Usa `nmap` para ver as portas abertas e `whatweb` para identificar a versão do CMS.
4. Descobre uma vulnerabilidade com CVE público — e encontra um _exploit_ pronto no GitHub.
5. Após explorar a falha, consegue uma shell reversa e entra como usuário de sistema.
6. Com `linpeas`, descobre um processo mal configurado e escala para root.
7. Extrai o banco de dados de clientes e o envia para um servidor externo.
8. Usa comandos do sistema para apagar o histórico e logs de acesso.

<Admonition type="caution" title="Alerta!">
  Resultado: os dados foram comprometidos e o time de segurança vai precisar correr para investigar, conter e responder ao incidente.
</Admonition>

---

## 🔐 O que a Defesa faz em cada etapa?

Enquanto o atacante executa suas fases, o time de defesa (blue team) tenta detectá-lo em **tempo real ou o mais rápido possível**:

| Fase do Ataque         | Ação do Blue Team                          |
|-------------------------|-------------------------------------------|
| Reconhecimento          | Monitoramento de tráfego DNS incomum      |
| Scanning                | Detecção de port scans e padrões anômalos |
| Exploitation            | Firewall, WAF, regras de detecção         |
| Escalada                | Alertas por comportamento incomum        |
| Exfiltração             | DLP (Data Loss Prevention), logs de rede  |
| Cobertura de rastros    | Comparação de logs, sistemas de integridade |

---

## Conceito Extra: MITRE ATT&CK

O **MITRE ATT&CK** é uma **matriz de técnicas** usadas por atacantes reais, baseada em casos documentados.  
É uma das ferramentas mais importantes da segurança moderna.

👉 Explore: [MITRE ATT&CK](https://attack.mitre.org)

<Admonition type="info" title="Curiosidade">
  A MITRE ATT&CK categoriza técnicas em diferentes fases: Reconhecimento, Execução, Persistência, Escalação de Privilégios, Evasão de Defesa, Acesso à Credencial, Descoberta, Movimento Lateral, Coleta, Comando e Controle, Exfiltração, Impacto.
</Admonition>

---

<Admonition type="tip" title="Exercício 3.1 — Ataque em Estudo">
  Escolha um caso real de ataque (ex: "ataques famosos" ou "breaches" recentes) e:

  1. Identifique **em qual etapa do kill chain** o ataque começou a ser detectado.
  2. Liste os **pontos falhos de segurança** da organização.
  3. Pense em **como você defenderia** essa empresa se fosse do blue team.
</Admonition>
