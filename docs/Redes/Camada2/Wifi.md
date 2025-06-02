---
title: Wi-fi
sidebar_position: 2
---

# Wi-fi

## 1. Introdução
O Wi-Fi é a tecnologia que permite a comunicação de dispositivos por meio de ondas de rádio, formando redes locais sem fio, conhecidas como WLANs (Wireless Local Area Networks). O termo é comercial, mas é baseado nos padrões IEEE 802.11, que definem as especificações técnicas para comunicação em redes sem fio.

Embora o Wi-Fi opere na camada física e na camada de enlace do modelo OSI, seu comportamento e segurança têm implicações diretas em todas as camadas superiores, especialmente na segurança da informação.

## 2. Fundamentos da Comunicação Sem Fio

Wi-Fi utiliza modulação de ondas eletromagnéticas para transmitir dados em frequências específicas, geralmente:

- 2,4 GHz (mais suscetível a interferência, maior alcance)

- 5 GHz (menos congestionado, menor alcance)

- 6 GHz (Wi-Fi 6E e Wi-Fi 7 – em expansão, menos interferência)

Essas frequências são divididas em canais, e os dispositivos devem estar sintonizados no mesmo canal para se comunicar.

<p style={{textAlign: 'center'}}>Ring </p>

<div style={{textAlign: 'center'}}>
    <img src="./../img/diagramawifi.png" width = "500" height = "300" />
</div>
<p></p> 

## 3. Arquitetura da Rede Wi-Fi

### 3.1 Componentes principais
**Access Point (AP):** dispositivo que atua como ponto central, transmitindo o sinal e controlando o tráfego sem fio.

**Estação (STA – Station):** qualquer dispositivo cliente, como notebooks, smartphones, câmeras IP.

**Distribuição (DS – Distribution System):** a infraestrutura (geralmente cabeada) que conecta os APs à rede principal.

### 3.2 Modos de operação

**Infraestrutura:** APs centralizam a comunicação. Todos os dispositivos se comunicam através do AP. Esse é o modo mais comum.

**Ad hoc (IBSS – Independent Basic Service Set):** dispositivos se conectam entre si diretamente, sem AP.

**Mesh:** APs também se comunicam entre si sem fio, formando uma rede com múltiplos caminhos e alta tolerância a falhas.

## 4. Camada Física (PHY Layer)
A camada física do Wi-Fi define como os bits são codificados em sinais de rádio.

### 4.1 Técnicas utilizadas
**OFDM (Orthogonal Frequency Division Multiplexing):** divide o canal em múltiplas subportadoras. Usado em 802.11a/g/n/ac/ax.

**DSSS (Direct Sequence Spread Spectrum):** espalha o sinal em uma faixa maior de frequência. Usado no 802.11b.

### 4.2 Padrões 802.11

<p style={{textAlign: 'center'}}>Padrões </p>

<div style={{textAlign: 'center'}}>
    <img src="./../img/wifigen.avif" width = "500" height = "300" />
</div>
<p></p>

| Padrão             | Ano    | Frequência  | Largura de Canal | Velocidade Máxima | Observações        |
| ------------------ | ------ | ----------- | ---------------- | ----------------- | ------------------ |
| 802.11b            | 1999   | 2,4 GHz     | 22 MHz           | 11 Mbps           | DSSS               |
| 802.11g            | 2003   | 2,4 GHz     | 20 MHz           | 54 Mbps           | OFDM               |
| 802.11n            | 2009   | 2,4/5 GHz   | 20/40 MHz        | 600 Mbps          | MIMO               |
| 802.11ac           | 2013   | 5 GHz       | 80/160 MHz       | 6,9 Gbps          | MU-MIMO            |
| 802.11ax (Wi-Fi 6) | 2019   | 2,4/5 GHz   | 20–160 MHz       | 9,6 Gbps          | OFDMA, TWT         |
| 802.11be (Wi-Fi 7) | \~2024 | 2,4/5/6 GHz | até 320 MHz      | >30 Gbps          | Em desenvolvimento |

## 5. Camada de Enlace: Acesso ao Meio

### 5.1 CSMA/CA

O Wi-Fi utiliza **Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)**. Como não é possível detectar colisões como no Ethernet, a rede tenta evitá-las, é por isso que você não fica tendo interferência quando outra pessoa fica acessando outro site no mesmo wi-fi que você.

- O dispositivo escuta o meio.

- Se estiver livre, espera um tempo aleatório (backoff).

- Pode usar RTS/CTS (Request to Send / Clear to Send) para negociar o uso do meio.

- Após envio do quadro, espera um ACK (acknowledgement) para saber se foi recebido.

## 6. Associações e Autenticação

O processo de conexão entre uma estação e um AP é dividido em três fases principais:

### 6.1 Descoberta (Scanning)
- **Passiva:** o STA escuta beacons transmitidos periodicamente pelo AP.

- **Ativa:** o STA envia probe requests procurando por SSIDs (nomes de rede).

### 6.2 Autenticação
- Pode ser aberta (sem verificação) ou baseada em senha/certificado.

- Nos modos protegidos, usa-se um handshake criptográfico (ex: 4-Way Handshake do WPA2/WPA3).

### 6.3 Associação
O AP reserva recursos para o cliente e permite a troca de dados após associação bem-sucedida.

## 7. Segurança em Wi-Fi
Wi-Fi é naturalmente vulnerável, pois o meio de transmissão é aberto (qualquer um pode escutar), então existem alguns protocolos de segurança para tentar conter isso. 

| Padrão                         | Criptografia                                | Vulnerabilidades                                                    |
| ------------------------------ | ------------------------------------------- | ------------------------------------------------------------------- |
| WEP (Wired Equivalent Privacy) | RC4, chave estática                         | Fácil de quebrar; inseguro desde 2003                               |
| WPA (Wi-Fi Protected Access)   | TKIP (baseado em RC4)                       | Suscetível a ataques de repetição                                   |
| WPA2                           | AES-CCMP                                    | Padrão por mais de uma década; WPA2-Enterprise com RADIUS é robusto |
| WPA3                           | SAE (Simultaneous Authentication of Equals) | Protege contra ataque de dicionário offline                         |

### 7.1 WPA2-Personal vs WPA2-Enterprise
**WPA2-Personal:** usa uma PSK (Pre-Shared Key) comum a todos.

**WPA2-Enterprise:** usa autenticação individual via EAP (Extensible Authentication Protocol), geralmente com servidores RADIUS.

### 7.2 - Tipos de ataque em Rede Wi-fi

| Tipo de Ataque       | Descrição                                                         | Ferramentas                  |
| -------------------- | ----------------------------------------------------------------- | ---------------------------- |
| Captura de Handshake | Captura de 4-way handshake para tentativa de brute-force da senha | `aircrack-ng`, `hcxdumptool` |
| Evil Twin            | Criação de AP falso com SSID idêntico ao legítimo                 | `airbase-ng`, `Wifiphisher`  |
| Deautenticação       | Envio de quadros de desautenticação para desconectar usuários     | `aireplay-ng`                |
| Sniffing de tráfego  | Captura de dados de usuários não criptografados                   | `Wireshark`, `tcpdump`       |
| Rogue AP             | AP conectado internamente por atacante, permitindo backdoors      | Manual ou via scripts        |

## 8. Como mantar a Segurança?

- Evite WEP/WPA e sempre use WPA2 ou WPA3.

- Prefira WPA2-Enterprise com autenticação 802.1X em ambientes corporativos.

- Implemente VLANs separadas para visitantes, dispositivos IoT e usuários internos.

- Monitore tentativas de conexão e use listas de controle de MAC com moderação (não são seguras contra spoofing).

- Desative o SSID broadcast apenas se tiver razão técnica clara (segurança por obscuridade não é eficaz).

- Acompanhe o espectro com ferramentas como Kismet e analise canais congestionados ou invasões.

