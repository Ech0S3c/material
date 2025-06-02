---
title: Introdução Camada Física
sidebar_position: 2
---

import Admonition from '@theme/Admonition';


# Camada 1 - Camada Física

A Camada Física do modelo OSI define as especificações elétricas, ópticas, mecânicas e funcionais para ativar, manter e desativar conexões físicas entre dispositivos.

Diferente das camadas superiores, ela não entende nada sobre protocolos ou endereços, nem mesmo se o que está transmitindo é parte de um e-mail, um vídeo ou uma senha. Seu único papel é garantir que os bits (0s e 1s) sejam transportados corretamente pelo meio físico.

---

## 1. Introdução

A Camada Física é a base da arquitetura de redes no modelo OSI (Open Systems Interconnection). Ela é responsável por definir os aspectos mecânicos, elétricos, ópticos e funcionais da conexão entre dispositivos, permitindo a transmissão bruta de bits por meio de um meio físico.

Entre as principais responsabilidades da Camada Física, destacam-se:

- **Definição do meio de transmissão:** cobre (cabo UTP, coaxial), fibra óptica ou meio sem fio.

- **Codificação e modulação de sinal:** como os bits são convertidos em sinais físicos.

- **Taxa de transmissão (bit rate):** quantidade de bits transmitidos por segundo (bps).

- **Sincronização:** alinhamento do relógio entre transmissor e receptor.

- **Especificação de conectores e pinagem:** como os dispositivos são fisicamente conectados.

---

## 2. Meios de Transmissão

A transmissão pode ocorrer por meios guiados (em que os sinais seguem um caminho físico, como cabos) ou por meios não guiados (como o ar, no caso das redes sem fio).

### 2.1 Meios guiados

**a) Par Trançado (UTP e STP)**

- O par trançado é o tipo de cabeamento mais comum em redes Ethernet.

- UTP (Unshielded Twisted Pair): cabo sem blindagem, mais barato e fácil de instalar, porém mais vulnerável a interferências eletromagnéticas.

- STP (Shielded Twisted Pair): possui blindagem adicional, oferecendo maior proteção contra ruídos externos.


**b) Cabo Coaxial**
Composto por um condutor central, isolamento, malha metálica e capa externa. Era comum em redes antigas como Ethernet 10Base2 e 10Base5. Ainda é usado em sistemas de TV a cabo e em alguns ambientes industriais.

**c) Fibra Óptica**
Utiliza luz para transmitir dados. É imune a interferências eletromagnéticas, oferece altíssima largura de banda e permite transmissão a longas distâncias.

- SMF (Single-Mode Fiber): usada para longas distâncias (até dezenas de quilômetros), com feixe de luz único.

- MMF (Multi-Mode Fiber): usada para curtas distâncias (até 2 km), mais barata e de instalação mais simples.


### 2.2 Meios não guiados

**a) Rádio Frequência**
Utiliza o espectro eletromagnético para enviar sinais sem fio. É a base de tecnologias como:

- Wi-Fi (Wireless Fidelity) – conforme o padrão IEEE 802.11, usado em redes locais sem fio (WLANs).

- Bluetooth – baseado no padrão IEEE 802.15.1, usado para conexões de curto alcance, como fones de ouvido ou teclado sem fio.

**b) Micro-ondas**
Usadas em enlaces de longa distância ponto-a-ponto, como redes de provedores em áreas remotas.

**c) Infravermelho**
Presente em controles remotos, impressoras sem fio antigas e alguns sensores. Curta distância e sensível a obstáculos.

<p style={{textAlign: 'center'}}> Camada Física  </p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/camada-fisica.png" />
</div>
<p></p>

---

## 3. Especificações Físicas e Padrões

A camada física segue padrões internacionais que determinam as características dos meios e das interfaces para que elas possam funcionar(já imaginou cada país tivesse suas próprias especificações?).

### 3.1 Organizações e padrões

**IEEE (Institute of Electrical and Electronics Engineers):**

- 802.3: Ethernet (cabeada)

- 802.11: Wi-Fi (sem fio)

---

**TIA/EIA (Telecommunications Industry Association / Electronic Industries Alliance)**

- TIA/EIA-568: padrões de cabeamento estruturado

- ITU-T (International Telecommunication Union - Telecommunication Standardization Sector):

- Padrões ópticos como G.652 (fibra monomodo)

---

Esses padrões especificam detalhes como:

- Tipo e diâmetro de cabos

- Esquema de pinagem (ordem dos fios em conectores)

- Distâncias máximas permitidas

- Requisitos de interferência eletromagnética


<Admonition type="caution" title="Sincronização e Clocking!">

Em redes digitais, é fundamental que transmissor e receptor estejam sincronizados. A Camada Física define mecanismos de sincronização de clock, garantindo que os bits sejam interpretados corretamente.

Exemplo: Em Ethernet, o sinal é transmitido com codificação que permite ao receptor extrair o clock embutido nos dados, evitando perda de sincronização mesmo sem canal de clock dedicado.
</Admonition>

---

## 4. Segurança na Camada Física
Apesar de ser **frequentemente negligenciada em projetos de segurança**, a Camada Física pode ser alvo de diversos ataques, então comoprofissional de cybersecurity é seu dever saber sobre eles e como proteje-los.

### 4.1 Ameaças à camada Física

- **Interceptação física (wire tapping):** colocação de dispositivos para capturar sinais em cabos ou fibras.

- **Sabotagem:** corte de cabos, desconexão física de dispositivos.

- **Invasão via dispositivo não autorizado:** conexão física de equipamentos maliciosos (ex: implantação de sniffers em portas de rede).

- **Jamming (em redes sem fio):** emissão de sinais de interferência para impedir a comunicação.

### 4.1 Como podemos proteger?

- Controle de acesso físico a racks e salas técnicas

- Monitoramento por câmeras e sensores de abertura

- Utilização de fibras ópticas com detecção de falhas

- Uso de switches com controle de portas (Port Security)

- Desabilitar interfaces físicas não utilizadas


<Admonition type="tips" title="Ethernet x Internet x Wi-Fi">

**Ethernet**

Ethernet é o nome da tecnologia usada para conectar dispositivos por cabo dentro de uma rede local (LAN). Quando você conecta seu computador a um roteador com um cabo de rede, você está usando Ethernet.

Ela é rápida, estável e segura, pois não sofre interferências como as redes sem fio. É amplamente usada em empresas, laboratórios e jogos online, onde a conexão precisa ser confiável.

---

**Wi-Fi**

Wi-Fi é a tecnologia que permite conexão sem fio, usando sinais de rádio para conectar dispositivos à rede local. Ele faz basicamente a mesma função da Ethernet, mas sem o cabo.

Por ser mais prática, é comum em casas, cafés e dispositivos móveis. Porém, está mais sujeita a interferências e perdas de sinal.

---

**Internet**

Já a Internet é a rede mundial que conecta milhões de redes e dispositivos ao redor do planeta. Ela não é um tipo de conexão, mas sim o "lugar" (a rede global) ao qual queremos nos conectar.

Tanto a Ethernet quanto o Wi-Fi são formas de acessar a Internet — ou seja, são tecnologias que usamos dentro da nossa rede local para chegar até a Internet.

---
| Termo    | O que é                      | Onde é usado                    |
| -------- | ---------------------------- | ------------------------------- |
| Ethernet | Conexão com cabo             | Redes locais (LANs)             |
| Wi-Fi    | Conexão sem fio              | Redes locais, móveis            |
| Internet | Rede mundial de computadores | Fora da sua rede local (global) |

</Admonition>