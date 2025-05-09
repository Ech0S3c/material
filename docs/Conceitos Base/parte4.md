---
title: Conceitos de cybersecurity
sidebar_position: 4
---

# 4. Termos Comuns no Mundo Hacker

## Segurança da Informação vs. Segurança Digital vs. Segurança Cibernética

Quando falamos de segurança, é comum ouvir termos como **"segurança da informação"**, **"segurança digital"** e **"segurança cibernética"**. Embora inter-relacionados, cada um possui seu foco específico:

- **Segurança da Informação**: Proteção de dados em qualquer formato, físico ou digital. Envolve políticas, processos e controles para garantir a confidencialidade, integridade e disponibilidade das informações.
- **Segurança Digital**: Proteção de informações em ambientes digitais — dispositivos, redes e sistemas. Subárea da segurança da informação.
- **Segurança Cibernética**: Proteção contra ameaças no ciberespaço, como ataques de hackers e malwares.

Essas áreas se complementam, formando uma abordagem holística de proteção.

🔗 [Pronnus: Diferença entre Segurança Cibernética e Segurança da Informação](https://pronnus.com.br/blog/qual-a-diferenca-entre-seguranca-cibernetica-x-seguranca-da-informacao/?utm_source=chatgpt.com)

---

## Irretratabilidade

A **irretratabilidade** (ou não repúdio) assegura que uma parte não possa negar a autoria de uma comunicação.

Tecnologias que suportam essa garantia:

- **Assinaturas digitais**: Criptografia assimétrica.
- **Logs de auditoria**: Registro de atividades.

Essencial para conformidade legal e responsabilidade digital.

---

## Vulnerabilidade, Ameaça e Risco

- **Vulnerabilidade**: Fraqueza no sistema. Ex.: software desatualizado.
- **Ameaça**: Possibilidade de causar dano. Ex.: hacker tentando explorar falha.
- **Risco**: Probabilidade de sucesso de uma ameaça explorando uma vulnerabilidade.

Análises comuns:

- **Qualitativa**: Baseada em experiência.
- **Quantitativa**: Baseada em métricas.

---

## Exploit vs. Payload

- **Exploit**: Código que explora uma vulnerabilidade.
- **Payload**: Código que executa ações após o exploit, como instalar malware.

> 🛠️ Ferramentas como o Metasploit utilizam exploits para entregar payloads.

---

## Hacker vs. Cracker

- **Hacker**: Especialista em computação que pode agir ética ou ilegalmente.
- **Cracker**: Indivíduo que viola sistemas de segurança com intenções maliciosas.

---

## Cybersecurity Color Wheel

Representação das equipes de segurança:

- **Red Team**: Simula ataques.
- **Blue Team**: Defende sistemas.
- **Purple Team**: Integra Red e Blue.
- **Green Team**: Promove segurança no desenvolvimento.
- **Yellow Team**: Especialistas em compliance e proteção de dados.

Referências:
- [HackerSec](https://hackersec.com/diferenca-entre-red-team-e-blue-team/?utm_source=chatgpt.com)
- [MakeUseOf](https://www.makeuseof.com/what-is-the-cybersecurity-color-wheel/?utm_source=chatgpt.com)
- [GeeksforGeeks](https://www.geeksforgeeks.org/colour-wheel-of-cyber-security/?utm_source=chatgpt.com)

---

## O que é Zero Day?

Vulnerabilidade desconhecida, explorada antes de correções estarem disponíveis.

<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/RLrqCv8q6uo"
  title="Onde as Pessoas vão Quando Querem Hackear Você"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

---

## OWASP TOP 10

O [OWASP TOP 10](https://owasp.org/www-project-top-ten/) lista as 10 principais vulnerabilidades em aplicações web.

> 🎯 Serve como guia de boas práticas para desenvolvedores e analistas de segurança.

---

## O que é OSINT?

**Open Source Intelligence** é a coleta de dados públicos — redes sociais, blogs, sites governamentais — para investigação.

---

## Google Hacking

Uso avançado do Google para localizar informações sensíveis expostas.

Exemplos:

- Senhas em arquivos públicos
- Câmeras abertas
- Sistemas internos expostos

---

## LGPD e GDPR

Legislações que regulam a coleta, uso e proteção de dados pessoais:

- **LGPD**: Foco no Brasil.
- **GDPR**: Regula a União Europeia.

---

## CVSS

**Common Vulnerability Scoring System**: Escala de 0 a 10 para medir gravidade de vulnerabilidades.

Componentes principais:

- Impacto
- Complexidade
- Requerimento de interação
- Escopo

---

## Engenharia Social

Manipulação psicológica para obter informações ou acesso.

Exemplos:

- E-mails falsos
- Telefonemas de "suporte técnico"

---

## Phishing, Vishing e Smishing

- **Phishing**: Golpes via e-mail.
- **Vishing**: Golpes via telefone.
- **Smishing**: Golpes via SMS.

Todos visam **roubar dados** ou **acessar dispositivos**.

---

## MFA: Autenticação Multifator

Combinação de:

- Algo que você sabe (senha)
- Algo que você tem (celular)
- Algo que você é (biometria)

> 🔒 Fortalece autenticação além de senhas.

---

## Botnets: Exércitos Zumbis Digitais

Conjuntos de dispositivos infectados e controlados remotamente.

Usos:

- Ataques DDoS
- Disseminação de malwares
- Mineração de criptomoedas

---

## Deep Web vs. Dark Web

- **Deep Web**: Conteúdo não indexado pelos motores de busca (ex.: intranets, bancos de dados).
- **Dark Web**: Parte oculta da Deep Web, acessível via Tor.

Nem tudo na Deep Web é criminoso — mas precaução é essencial.

---

## Backup e Redundância

- **Backup**: Cópias de segurança dos dados.
- **Redundância**: Duplicação de sistemas para garantir continuidade.

> 💾 Quem não tem backup, já perdeu — só ainda não sabe.

---

## Tipos de Vírus 

1. 📎**Vírus de Arquivo (File Virus)**  
Esses são os “velha guarda” dos vírus — os clássicos. Eles se anexam a arquivos executáveis (.exe, .com) e são ativados quando o arquivo é aberto.

   Exemplo famoso: Cascade, aquele que fazia as letras do seu terminal caírem como chuva.  
   **Ataque silencioso**: você acha que está abrindo seu joguinho favorito... e tá lançando o caos no sistema.

---

2. 🛠️ **Vírus de Boot (Boot Sector Virus)**  
Se fosse um RPG, esse vírus atacaria no "nascimento" do sistema. Ele se instala no setor de boot de discos rígidos ou dispositivos removíveis (pendrives, CDs antigos, etc).

   Exemplo famoso: Michelangelo, que ativava no aniversário do artista (6 de março) e podia corromper discos inteiros.

---

3. 🧪 **Vírus de Macro (Macro Virus)**  
Se você achava que documentos Word e Excel eram inofensivos... surpresa! Macros são pequenos scripts dentro desses arquivos — e podem ser usados para propagar malware.

   Exemplo famoso: Melissa, que se espalhou como fogo no parquinho em 1999 via e-mails do Outlook.  
   **Lição**: desabilite macros automáticos, a não ser que você confie mais nesse documento do que no Wi-Fi da praça.

---

4. 🕵️‍♂️ **Vírus Polimórfico (Polymorphic Virus)**  
Um vírus polimórfico muda seu "disfarce" cada vez que infecta um novo sistema. O objetivo? Enganar antivírus tradicionais, que procuram padrões fixos.

   Exemplo famoso: Storm Worm, que reinventava sua assinatura a cada ataque.  
   **Resumo**: é como enfrentar um mago que troca de forma toda vez que você acerta um golpe.

---

5. 🧬 **Vírus Metamórfico (Metamorphic Virus)**  
Se o vírus polimórfico é um mestre do disfarce, o metamórfico é o mestre da mutação genética. Ele reescreve completamente seu próprio código a cada infecção.

   **Alerta**: você acha que está lutando contra o mesmo inimigo, mas ele já virou outro monstro.

---

6. 🏰 **Cavalo de Troia (Trojan Horse)**  
Assim como na história grega, o cavalo de Troia é um presente envenenado. Parece algo legítimo (tipo um app grátis incrível), mas, uma vez dentro do sistema, abre as portas para invasores.

    **Moral**: quando algo é “bom demais pra ser verdade”, provavelmente é.

---

7. 💣 **Worms (Vermes)**  
Diferente dos vírus comuns, worms não precisam de hospedeiro. Eles se replicam sozinhos e se espalham em redes como quem passa receita de bolo no grupo da família.

   Exemplo famoso: ILOVEYOU, que causou bilhões de dólares em prejuízo mundial.  
   **Resumo**: é o vírus que já nasce empreendedor — se auto-replica sem ajuda de ninguém.

---

8. 👑 **Ransomware**  
A estrela do terror digital moderno. Ransomware criptografa seus arquivos e exige resgate em criptomoeda pra devolver o acesso.

   Exemplo famoso: WannaCry, que afetou hospitais, empresas e governos inteiros em 2017.  
    **Resumo**: "Se quer seus dados de volta, passa o Pix."

---

9. 👻 **Vírus Residentes (Resident Virus)**  
Esses vírus se instalam na memória RAM e ficam lá, ativos mesmo depois que o arquivo inicial foi fechado ou deletado. Atacam silenciosamente, interceptando operações do sistema.

   **Piadinha inevitável**: "tá em casa", ocupando espaço e causando dor de cabeça.

---

