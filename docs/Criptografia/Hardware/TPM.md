---
title: TPM
sidebar_position: 1
---
import Admonition from '@theme/Admonition';

# TPM — Trusted Platform Module

Você já parou pra pensar que todo sistema começa com confiança? Não é com o kernel. Não é com o usuário root. Não é com o firewall.
É com algo que diga: “Esse sistema é autêntico e disco realmente pertence a este dispositivo.”

Essa é a premissa por trás do TPM.

## 1. O que é o TPM?

Diferente do HSM, que soa como algo distante, de datacenter, de infraestrutura crítica, o TPM(Não é o tpm que você pensou '-') está bem mais próximo do seu dia a dia do que você imagina.

É um chip físico, embutido na placa-mãe da maioria dos computadores modernos (especialmente notebooks, desktops corporativos e servidores), dedicado à proteção de integridade do sistema e gerenciamento de chaves criptográficas locais.

Ele não é removíve e não é opcional (especialmente com as exigências modernas de SOs como o Windows 11, que obriga o computador a ter um).

Ele tem uma função até que simples: **garantir que o sistema não está mentindo pra você.**

<p style={{textAlign: 'center'}}> Placa TPM</p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/tpm.jpg " width = "400px" heigth = "300px" />
</div>
<p></p>

<Admonition type="info" title="Funcionalidades TPM">

O TPM combina funções de criptografia com medidas de segurança de plataforma. Isso significa que ele:

- Gera e armazena chaves criptográficas internamente.

M- ede o estado de boot (medidas de integridade de BIOS, bootloader, etc.).

- Protege o disco com BitLocker (no caso do Windows).

- Armazena certificados digitais de identidade.

- Assina documentos e autentica usuários com base em hardware.

- Suporta autenticação multifator baseada em dispositivo.

- E tudo isso sem expor as chaves — elas nunca saem do TPM.

_Mas pera aí... isso não é a mesma coisa que um HSM?_

Ótimo pensamento,mas, quase isso, em questões de analogia seria algo como:

TPM é o seu porteiro digital pessoal. Ele sabe se a casa está trancada, se o alarme disparou, se a janela foi aberta durante a noite.
HSM é o cofre da instituição financeira. Ele guarda  ouro nacional e segredos de Estado, tranca com múltiplos níveis, e destroi tudo,  se você tentar abrir com o pé-de-cabra.


<p style={{textAlign: 'center'}}> Diagrama TPM</p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/tpmDiagrama.jpg " width = "500px" heigth = "400px" />
</div>
<p></p>

</Admonition>

## HSM X TPM

| Característica   | TPM                                        | HSM                                               |
| ---------------- | ------------------------------------------ | ------------------------------------------------- |
| Localização      | Integrado na placa-mãe                     | Dispositivo físico externo (ou cloud)             |
| Finalidade       | Confiança local, boot seguro, autenticação | Gestão de chaves em larga escala, PKI, transações |
| Segurança física | Alta (mas limitada ao ambiente local)      | Altíssima (tamper-proof, sensores físicos)        |
| Performance      | Baixa (uso pontual, local)                 | Alta (opera grandes volumes de transações)        |
| APIs típicas     | TCG, Windows CSP, Linux tpm2-tools         | PKCS#11, CAPI, JCE                                |
| Casos de uso     | Boot seguro, BitLocker, autenticação       | Certificados raiz, carteiras, fintechs            |


Então em resumo:

O TPM protege o ambiente local (boot, disco, autenticação).

O HSM protege o ambiente organizacional (autoridades, trust anchors, bancos de dados sensíveis).

<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/I54tvNqpiZ0?si=RqNaO74aMlwCFtph"
  title="YouTube Video"
  frameBorder="0"
  allowFullScreen
 ></iframe>


### TPM na prática: o que ele mede?

O boot do seu sistema, desde a BIOS até o kernel, é medido com hashes e armazenado no TPM. Se algum binário for modificado (ataque de bootkit, rootkit de firmware, ou atualização não autorizada), os hashes não batem mais.

E o  resultado disso? O disco criptografado com BitLocker, por exemplo, não será mais desbloqueado automaticamente.
A confiança foi quebrada, o TPM percebeu e o sistema parou de confiar.

Tanto o TPM quanto o HSM existem pra mesma coisa: impedir que o digital seja enganado.

O TPM garante que seu sistema começa do jeito certo. Que ninguém trocou seu bootloader. Que a identidade do seu dispositivo não foi clonada. Que você está de fato num ambiente íntegro.

O HSM garante que, mesmo num ambiente inseguro, a criptografia ainda protege o que importa, que a raiz de confiança está viva, auditável e fora do alcance do adversário.

Ambos têm seus papéis. Ambos são invisíveis quando funcionam. Mas sem eles, não existe confiança verdadeira em sistemas modernos.
