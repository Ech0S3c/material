---
title: Tipos de rede, Modelos e Endereçamento
sidebar_position: 3
---

import Admonition from '@theme/Admonition';

# Fundamentos de Redes - Tipos, Modelos e Endereçamento

Antes de falarmos sobre ataques, firewalls, exploits e todo o universo maravilhoso da **Cybersecurity**, a gente precisa entender o “chão” onde tudo acontece: as redes.

É como aprender segurança de voo sem entender como funciona um avião — não dá né?

Vamos explorar agora quatro grandes pilares que você precisa dominar para se tornar uma referência em segurança de redes:

1. Tipos de Redes (LAN, WAN, MAN, PAN)  
2. Modelos de Comunicação (OSI vs TCP/IP)  
3. Endereçamento IP (IPv4, IPv6)  
4. Máscaras de Sub-rede

---

## 1. Tipos de Redes: LAN, WAN, MAN, PAN

A organização física e lógica de uma rede depende, em grande parte, de sua escala geográfica, do número de dispositivos envolvidos e das exigências de desempenho e segurança. As classificações LAN, MAN, WAN e PAN representam diferentes formas de estruturação baseadas nesses critérios.


### LAN – Local Area Network
LAN (Rede de Área Local) é o modelo mais comum de rede utilizado em ambientes corporativos, domésticos ou educacionais(Ou no Minecraft quando queremos jogar com alguém). Ela é caracterizada por uma cobertura geográfica limitada (até alguns quilômetros), normalmente sob uma administração única e centralizada. Os dispositivos em uma LAN compartilham uma infraestrutura de rede que pode incluir switches, roteadores e pontos de acesso.

Características:

- Altas taxas de transferência(Na teoria) (100 Mbps a 10 Gbps, dependendo da tecnologia empregada)

- Baixa latência

- Tecnologias amplamente utilizadas: Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11)


**Exemplo:**  Uma rede em um escritório, casa, ou campus universitário onde todos os dispositivos estão próximos e conectados por meio de cabos ou Wi-Fi. 

---
### MAN – Metropolitan Area Network
MAN (Rede de Área Metropolitana) conecta múltiplas LANs dentro de uma mesma cidade ou região metropolitana. Essa categoria de rede é geralmente operada por empresas de telecomunicações ou consórcios públicos/privados, e utiliza meios de transmissão de alta capacidade como fibra óptica.

Características:

- Abrange distâncias de até dezenas de quilômetros

- Emprega protocolos como MPLS, Metro Ethernet e SDH

- Normalmente utiliza roteadores de borda e tecnologias de backbone para conexão entre os pontos


**Exemplo:** Uma rede que conecta vários escritórios de uma empresa em uma mesma cidade, ou diferentes campus de uma universidade. 

---
### WAN – Wide Area Network
WAN (Rede de Longa Distância) conecta redes geograficamente dispersas em nível nacional(no caso do Brasil) ou internacional(Continentes). A Internet é o maior exemplo de uma WAN. Sua operação geralmente requer a utilização de infraestruturas de telecomunicação terceirizadas e tecnologias robustas de roteamento.

Características:

- Distâncias globais, com topologias complexas e redundantes

- Protocolos de roteamento amplamente utilizados: BGP (entre sistemas autônomos), OSPF e EIGRP (internamente)

- Tecnologias de transporte: MPLS, ATM, SD-WAN, enlaces dedicados, satélites, fibra óptica submarina

**Exemplo:** A Internet, ou a rede que conecta as diferentes unidades de uma empresa em diferentes estados ou países. 

---
### PAN – Personal Area Network

PAN (Rede de Área Pessoal) refere-se a redes formadas por dispositivos de um único usuário, geralmente com alcance muito restrito (até 10 metros). Exemplos incluem a conexão entre um smartphone e fones Bluetooth, smartwatches ou notebooks.

Características:

- Curtíssimo alcance

- Baixo consumo energético

- Tecnologias: Bluetooth, ZigBee, NFC, USB


**Exemplo:** Seu celular sincronizando com seu fone.



<Admonition type="tip" title="Resumo">
<p style={{textAlign: 'center'}}> Tipos de redes </p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/tiposredes.jpg" />
</div>
<p></p>
- LAN: Rede local (empresa, escola)  
- MAN: Rede metropolitana (cidade)  
- WAN: Rede de longa distância (Internet)  
- PAN: Rede pessoal (Bluetooth, USB, NFC)
</Admonition>

---

## 2. Modelo OSI vs Modelo TCP/IP

Para que todos os dispositivos consigam se entender numa rede, foi necessário criar **modelos de referência de comunicação**. Eles descrevem **como os dados devem ser transmitidos, processados e recebidos**. 

### Modelo OSI (Open Systems Interconnection)

O Modelo OSI foi proposto pela ISO com o objetivo de padronizar a comunicação entre sistemas computacionais heterogêneos. Ele divide o processo de comunicação em sete camadas funcionais, permitindo o isolamento de problemas e o desenvolvimento modular de tecnologias.

| Camada | Nome         | Função Técnica Principal                                                          |
| ------ | ------------ | --------------------------------------------------------------------------------- |
| 7      | Aplicação    | Interface com os aplicativos (HTTP, SMTP, FTP)                                    |
| 6      | Apresentação | Conversão de formatos, compressão, criptografia (ex: TLS)                         |
| 5      | Sessão       | Estabelecimento, manutenção e encerramento de sessões (ex: RPC, NetBIOS)          |
| 4      | Transporte   | Comunicação fim a fim, controle de fluxo e erro (TCP, UDP)                        |
| 3      | Rede         | Roteamento e endereçamento lógico (IP, ICMP, BGP)                                 |
| 2      | Enlace       | Endereçamento físico (MAC), detecção de erro, controle de acesso (Ethernet, PPP)  |
| 1      | Física       | Transmissão de bits em meios físicos (cabos, ondas eletromagnéticas, sinalização) |

A categorização por camadas permite definir controles e políticas de segurança específicos em cada nível — como firewalls na camada 4, sistemas de detecção de intrusos na camada 3, criptografia na camada 6 e autenticação na camada 7.

###  Modelo TCP/IP

Modelo prático, usado na Internet real. O Modelo TCP/IP, base da Internet moderna, é uma implementação prática e reduzida das funcionalidades do OSI com apenas 4 camadas. O OSI é um modelo conceitual, usado para ensino, troubleshooting e planejamento já o o TCP/IP é o modelo real implementado em sistemas operacionais, dispositivos Cisco, e na Internet.

| Camada TCP/IP | Equivalente OSI     |
|----------------|----------------------|
| Aplicação      | 7, 6, 5              |
| Transporte     | 4                    |
| Internet       | 3                    |
| Acesso à rede  | 2 e 1               |


_O modelo TCP/IP veio **antes** do OSI e é o que a Internet realmente usa. O OSI, apesar de mais didático, é mais teórico._

---

## 3. Endereçamento IP (IPv4 e IPv6)

Sem endereço, não dá para achar niguém e é por isso que todo dispositivo conectado a uma rede precisa de um identificador único — o endereço IP (Internet Protocol). Ele atua como o equivalente digital ao endereço que usamos na vida real.

IPv4 e IPv6 são versões do protocolo de Internet (IP) que permitem que os dispositivos se comuniquem em redes, o IPv4 usa 32 bits, com um espaço de endereçamento de cerca de 4 bilhões de endereços e o IPv6 usa 128 bits, oferecendo um número imensurável de endereços, cerca de 340 undecilhões.

### IPv4 – Internet Protocol versão 4

- Usa **32 bits** (4 bytes)  
- Formato: `192.168.1.1`  
- Suporta **aproximadamente 4,3 bilhões de endereços**

Só que... **acabaram os endereços IPv4 disponíveis**, e graças a isso foram criados alguns mecanismos de retardar o problema do esgotamento como o NAT(Network Adress Translation).

### NAT(Network Adress Translation)
Com um mapeamento um-para-um de endereços IP para dispositivos, o conjunto de endereços disponíveis do protocolo IPv4 teria se esgotado anos atrás, forçando uma mudança para IPv6. No entanto, com o NAT, muitos dispositivos conectados à Internet podem compartilhar o mesmo endereço IPv4 público, o que permitiu que o padrão IPv4 fosse dimensionado para atender à demanda.

NAT funciona tendo um firewall atuar como intermediário para o tráfego que entra e sai da rede protegida. O tráfego de entrada é direcionado para um endereço IP público, que é traduzido em um endereço IP interno para o firewall antes de enviar o tráfego para seu destino. Os endereços de origem do tráfego de saída são atualizados de forma semelhante, de endereços IP internos privados para endereços públicos externos.

Quando um dispositivo na sua rede local (por exemplo, um computador com IP privado 192.168.1.100) tenta acessar um site na internet, o roteador com NAT intercepta o pacote e substitui o endereço IP de origem (192.168.1.100) pelo endereço IP público da sua rede (por exemplo, 203.0.113.1). Assim, a internet vê que a requisição veio de 203.0.113.1 e não de um endereço IP privado. 


### IPv6 – Interassimnet Protocol versão 6
- Usa **128 bits**  
- Formato : `2001:0db8:85a3:0000:0000:8a2e:0370:7334`  
- Capacidade Muito superior ao IPV6

IPv6 resolve o problema do esgotamento, melhora a segurança e simplifica o roteamento. IPv6 elimina também a necessidade de NAT, pois oferece um número suficiente de endereços IP para cada dispositivo se conectar diretamente à Internet. 

`Mas porque não mudaram todos logo para ipv6?`

Como o IPV4 Veio bem antes, não havia a necessidade de esse monte de endereços. A maioria das infraestruturas de rede atuais é baseada no IPv4, e a migração para o IPv6 requer que ambos os protocolos coexistam por um tempo. Isso pode criar complexidades e, em alguns casos, problemas de compatibilidade. Alem do mais a atualização de toda a infraestrutura de rede para suporte ao IPv6 pode ser um custo significativo, e nem todos os provedores estão dispostos a investir nesse processo. 

---

## 4. Máscaras de Sub-rede

Imagine que você tem uma caixa cheia de apartamentos (IPs), mas quer dividir os andares (sub-redes) para organizar melhor.

Quando um host envia uma mensagem para um destino, o sistema deve determinar se o destino está na mesma rede que a origem ou se o destino pode ser alcançado diretamente por meio de uma das interfaces locais. O sistema compara o endereço de destino para o endereço do host utilizando o máscara de subrede.

A **máscara de sub-rede** é o que define **quais bits pertencem à rede** e **quais à máquina** (host).


### Exemplo

IP: `192.168.1.10`  
Máscara: `255.255.255.0` (ou /24)

Esta máscara é a mais comum para redes IP privadas. Ela indica que os primeiros 24 bits do endereço IP são usados para identificar a rede, e os últimos 8 bits para identificar o host. Ou seja se o IP for 192.168.1.10, e a máscara for 255.255.255.0, então 192.168.1 é o endereço da rede, e 10 é o endereço do host.

Em Resumo:

- Os **24 primeiros bits** são a parte da **rede** (`192.168.1`)  
- Os **8 bits finais** são para os **hosts** (`.10`)

Então essa sub-rede pode ter até **254 dispositivos únicos**.(Será que você tem 254 dispositivos em casa?)

<Admonition type="caution" title="Atenção!">
Uma má segmentação de sub-redes pode gerar **conflitos de IP**, **broadcast excessivo** e **falhas de roteamento**. Saber subnetting é essencial em segurança de redes.
</Admonition>

---

