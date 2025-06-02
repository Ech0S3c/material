---
title: Introdução
sidebar_position: 2
---

# Fundamentos Sobre Redes de Computadores e Internet

## 1. Internet

Tá bom, até esse momento na faculdade você já deve entender que a Internet não é um espaço físico, nem uma “nuvem” mágica pairando sobre nossos dispositivos.

A Internet é uma infraestrutura distribuída de comunicação, capaz de conectar bilhões de sistemas, de maneira confiável, escalável e — até certo ponto — resiliente a falhas, ~OU quase para quem mora no Share~.

Do ponto de vista funcional, a Internet é uma plataforma que permite a comunicação de dados entre aplicações rodando em diferentes dispositivos ao redor do mundo.

Você envia uma mensagem no WhatsApp. Alguém em outro continente recebe. Parece trivial, mas o que ocorre nos bastidores envolve múltiplas camadas de abstração, controle de congestionamento, roteamento dinâmico e protocolos padronizados que orquestram essa parada que é muito caótica

Agora para ser chato com vocês:

_Quando é enviada uma Mensagem, ou seja, o pedido ou informação que deve ser enviado para alguma entidade,suas principais garantias de segurança são, confidencialidade, autenticação, integridade e não repúdio, ou seja a mensagem deve se enviada e compreendida somente para o receptor, sendo escondida por todo o resto, uma maneira de fazer isso é com  criptografia, ela deve ter integridade então a mensagem deve ter a garantia de chegar ao destinatário sem nenhuma alteração, ela deve ser autenticada então o receptor deve ter garantia da identidade do emissor, evitando golpistas e por fim a mensagem deve ser não repudiável, ou seja, o cliente não pode rejeitar uma mensagem que foi enviada por ele mesmo. Após esses 4 serviços o 5º cabe ao serviço, que é a autenticação do usuário, ou seja,ele deve garantir que quem enviou a mensagem é o próprio solicitante._



<p style={{textAlign: 'center'}}> Diagrama</p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/mensagemEntidade.png" />
</div>
<p></p>

Eu falei que ia encher o saco de vocês com esses conceitos e que eles iam voltar kkkkkk

### 1.1 Rede distribuída??

A Internet é, essencialmente, uma rede de redes.
Ela conecta sistemas autônomos (ISPs, universidades, empresas, provedores de conteúdo) por meio de roteadores, enlaces físicos e protocolos cooperativos.(Calma que vocês vão entender todas elas palavras ao longo do material)

Cada um desses sistemas tem sua própria política interna, mas todos falam os mesmos protocolos fundamentais — TCP/IP.

Dizer que a Internet é distribuída significa que não há um único centro de controle, então as decisões de roteamento, endereçamento, distribuição de tráfego e resolução de nomes (DNS) são tomadas localmente por sistemas independentes que colaboram segundo regras padronizadas.

Essa descentralização é o que torna a Internet escalável e, em certa medida, resistente a falhas catastróficas.

### 1.3 Papel do usuário e da infraestrutura

O usuário é, na maioria das vezes, o produtor e o consumidor de dados.
Ele interage com aplicações — navegadores, aplicativos, jogos — que, por trás das interfaces gráficas, geram e consomem pacotes de dados.

Já a infraestrutura — switches, roteadores, enlaces ópticos, satélites, modems — é responsável por garantir que esses pacotes cheguem ao destino correto, com mínima latência, perda e duplicação.
A aplicação espera confiabilidade, a infraestrutura entrega melhor esforço.


<p style={{textAlign: 'center'}}> Redes de redes né</p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/internet.png" />
</div>
<p></p>

## 2. Protocolo

Um protocolo define o formato e a ordem das mensagens trocadas entre duas ou mais entidades comunicantes, bem como as ações realizadas na transmissão e/ou no recebimento de mensagens ou outro evento.

Talvez seja mais fácil entender a ideia de um protocolo de rede de computadores fazendo antes uma analogia com interações humanas, já que seguimos protocolos o tempo todo, mesmo sem perceber.

Pense, por exemplo, no que você faz quando quer perguntar as horas para alguém. Um diálogo típico pode ser ilustrado na imagem abaixo. O "protocolo humano" — ou, pelo menos, as boas maneiras — nos orienta a cumprimentar a outra pessoa antes de iniciar uma conversa (o primeiro "Oi" na figura abaixo). A resposta usual a esse cumprimento é outro "Oi". Essa troca cordial indica, implicitamente, que é apropriado prosseguir e fazer a pergunta sobre as horas.

No entanto, se a reação ao "Oi" for algo como "Não me perturbe!", "Eu não falo português!" ou alguma resposta ríspida, entendemos que a comunicação não deve continuar. Nesse caso, o protocolo nos diz para não perguntar as horas. Às vezes, nem recebemos resposta alguma — o que geralmente nos leva a desistir da interação.

Note que, nesse protocolo humano, existem mensagens específicas que enviamos e ações específicas que tomamos em resposta às mensagens recebidas ou à ausência de resposta. Isso mostra que mensagens trocadas, ações realizadas e eventos observados desempenham um papel central nos protocolos — sejam humanos ou de rede. Se as pessoas seguem protocolos diferentes (por exemplo, se uma é educada e a outra não, ou se uma entende o que são "horas" e a outra não), a comunicação falha e nenhuma tarefa útil pode ser realizada.

O mesmo princípio vale para redes de computadores: é fundamental que as entidades envolvidas sigam o mesmo protocolo para que uma tarefa possa ser executada corretamente.
<p style={{textAlign: 'center'}}> Protocolo Humano</p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/protocolohumano.png" />
</div>
<p></p>

Assim como no exemplo humano, um protocolo de rede define regras que governam a comunicação — a diferença é que, nesse caso, quem troca mensagens são componentes de hardware ou software de dispositivos como computadores, smartphones, tablets, roteadores, entre outros.

Todas as atividades na Internet que envolvem comunicação entre duas ou mais entidades remotas seguem algum tipo de protocolo. Por exemplo:

Protocolos executados no hardware de dois computadores controlam o fluxo de bits no cabo entre as placas de rede.

Protocolos de controle de congestionamento nos dispositivos finais regulam a taxa de envio dos pacotes.

Protocolos nos roteadores determinam o caminho que os pacotes devem seguir da origem ao destino.

Esses protocolos estão presentes em toda a Internet. Por isso, grande parte deste livro será dedicada ao estudo dos protocolos de rede.

Um exemplo comum é o protocolo usado quando você acessa uma página da web. Ao digitar a URL no navegador (browser), seu computador envia uma mensagem de requisição de conexão ao servidor. O servidor, por sua vez, responde com uma mensagem de confirmação. Quando a conexão está estabelecida, o computador envia uma mensagem GET, solicitando o conteúdo da página, algo que imagino que vocês já tenham visto no segundo módulo. O servidor então responde com o arquivo da página, completando o processo. Essa troca de mensagens segue um protocolo específico da web.

## 3. Hubs x Swichs x Roteadores x  Modem
São basicamente os principais mecanismos envenvendo a tecnologia de redes. Eles são responsáveis por repassar informações, mas tem algumas diferenças entre eles.

### Hubs
O hub é um equipamento bem antigo, sendo um dos primeiros a serem usados pelas empresas em redes locais. Basicamente, o hubt conecta os computadores de uma rede e possibilita a transmissão das informações entre eles. Porém, é exatamente nesta transmissão que está o seu ponto fraco: ao pegar a informação de um computador para enviar, o equipamento passa as informações por todos os computadores até encontrar o destinatário final. Isto causa um tráfego enorme, além de expor os dados a qualquer um que esteja conectado nela, gerando um sério problema de segurança.

<p style={{textAlign: 'center'}}> HUB </p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/hub.jpg" />
</div>
<p></p>

Assim, por causa da maneira como trabalha e dos perigos decorrentes disto, o hub caiu em desuso há alguns anos. Embora algumas empresas ainda o usem (acredite, isso ainda acontece), ele foi perdendo espaço à medida que os fabricantes criaram uma solução mais inteligente para substituí-lo: o switch.

### Switch
Criado principalmente para resolver os problemas que o hub apresentava, o switch é um equipamento que apresenta basicamente a mesma função executada de uma maneira diversa. Diferente de seu antecessor, um comutador, como também é chamado, recebe a informação a ser transmitida e a repassa apenas para o destinatário, evitando expô-la a outros computadores.

O processo é realizado decodificando o cabeçalho do pacote e localizando as informações do receptor dos dados. O aparelho guarda os endereços dos destinatários em uma tabela na sua memória. Desta forma, ele consegue entregar as informações unicamente à máquina destinada e, assim, consegue ainda diminuir o tráfego da rede.


<p style={{textAlign: 'center'}}> Switch </p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/switch.jpg" />
</div>
<p></p>


Vale lembrar que mesmo em uma rede com um switch ainda é possível capturar informações, através de técnicas de sniffer. É necessário que o equipamento tenha algum tipo de proteção especial para evitar este tipo de roubo.

Quanto aos recursos, os comutadores podem ser classificados como gerenciáveis e não gerenciáveis. A principal diferença entre eles é que o primeiro se limita a apenas conectar dispositivos e transmitir dos dados dentro da rede, enquanto o segundo, além de fazer isso, conta com ferramentas que permitem administrá-lo remotamente ou até mesmo ver relatórios sobre determinados aspectos da rede e seu uso.

### Roteadores

O roteador é um equipamento que faz o papel de um intermediador, possibilitando a troca de pacotes entre redes separadas. Este trabalho é realizado seguindo um conjunto de regras que são encontradas na tabela de roteamento.

<p style={{textAlign: 'center'}}> Roteador </p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/roteador.jpeg" />
</div>
<p></p>

O uso de aparelhos do gênero é comum em situações em que é necessário interligar redes diferentes, mas que, ao mesmo tempo, é preciso mantê-las isoladas. Na prática, quem está em uma delas não consegue enxergar diretamente a outra, a menos que utilize o dispositivo como “caminho”para isso.

Roteadores podem ser encontrados na forma de equipamentos fechados ou como computadores com mais de uma placa de rede, usando um sistema operacional configurado para esta função. Nesse último caso, boa parte dos PCs usados como firewall também atuam como roteador por causa do inerente trabalho de segurança desse tipo de funcionalidade.



### Modem
O modem é um dispositivo eletrônico que modula um sinal digital em uma onda analógica, capaz de ser transmitida pela linha telefônica, e que demodula o sinal analógico e o converte novamente para o formato digital original, criando uma comunicação entre dois pontos. É exatamente por causa desta característica que o aparelho tem este nome, que vem da junção das palavras (mo)dulador e (dem)odulador.

<p style={{textAlign: 'center'}}> Modem </p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/modem.jpg" />
</div>
<p></p>

## 4. Sistemas Finais, Datacenters e a Computação em Nuvem

Na borda da rede, longe dos grandes cabos e roteadores centrais, estão os sistemas finais — também chamados de hosts. Esses dispositivos são os pontos de contato direto entre os usuários e a Internet. Estamos falando de computadores pessoais, notebooks, smartphones, tablets, servidores Web e de e-mail, além dos diversos dispositivos IoT que hoje se conectam à rede — como câmeras inteligentes, geladeiras conectadas e sensores industriais.

A principal função dos sistemas finais é hospedar programas de aplicação, ou seja, softwares que os usuários utilizam diretamente: navegadores, apps de e-mail, plataformas de streaming, redes sociais, entre outros. Esses sistemas se dividem, de forma geral, em dois tipos:

- **Clientes:** dispositivos dos usuários finais, como seu notebook ou celular.

- **Servidores:** máquinas mais robustas, muitas vezes localizadas em datacenters, que fornecem serviços e armazenam conteúdos acessados pelos clientes.


<p style={{textAlign: 'center'}}> Redes de redes né</p>

<div style={{textAlign: 'center'}}>
    <img src="../../img/internet.png" />
</div>
<p></p>

E é aí que entram os datacenters — o coração da Internet moderna.

Os datacenters são instalações massivas, repletas de milhares de servidores organizados em estantes e interligados por redes internas de altíssima performance. Cada servidor, muitas vezes chamado de lâmina (blade), trabalha em conjunto com outros para suportar a carga gigantesca de dados processados diariamente.

Empresas como **Amazon, Google e Microsoft** mantêm datacenters espalhados pelo mundo para três funções principais:

- Oferecer serviços próprios, como páginas de e-commerce, vídeos e pesquisas.

- Processar dados em larga escala, desde sugestões personalizadas até algoritmos de inteligência artificial.

- Fornecer infraestrutura de computação em nuvem para terceiros — o famoso modelo cloud. Por exemplo, empresas como a Airbnb rodam boa parte de sua operação na nuvem da Amazon (AWS), sem precisarem manter servidores próprios.

Esses datacenters são responsáveis pela simplicidade de acessar um site no celular e a complexidade por trás de entregar aquele conteúdo em milissegundos. Eles tornam possível a escalabilidade, a disponibilidade 24/7 e a inovação constante da Internet como a conhecemos.