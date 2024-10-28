---
title: "Introdução a sockets, TCP e UDP"
subtitle: "Comunicações por Computador"
description: "Apresentação de conteúdos concisos."
date: "19-09-2024"
author: "Pedro Pereira"
---

### O que é a camada de transporte?

A camada de transporte, no modelo OSI (Open Systems Interconnection), é a quarta camada e tem como principal função a comunicação fim-a-fim entre dispositivos numa rede. Esta camada garante que os dados sejam transmitidos de forma fiável e eficiente de uma aplicação num computador para outra aplicação noutro computador, mesmo que estes estejam em redes diferentes. Atua como intermediária entre a camada de rede e a camada de aplicação.

As principais responsabilidades da camada de transporte incluem:

- **Transmissão de dados fiável**: garante que os dados sejam entregues na ordem correta e sem erros.
- **Multiplexagem e desmultiplexagem**: permite que várias aplicações num mesmo dispositivo utilizem a rede simultaneamente.
- **Controlo de fluxo e congestão**: evita que um emissor sobrecarregue o recetor ou a rede.

### Explicar o que é um pacote TCP e um UDP

- **TCP (Transmission Control Protocol)**: é um protocolo orientado à conexão, o que significa que estabelece uma ligação antes de transmitir dados e garante a entrega fiável e ordenada dos pacotes. Cada pacote TCP inclui informações de controlo, como números de sequência, confirmação de recebimento (ACK), e controlo de erros. Exemplo: Usado em aplicações que requerem entrega garantida, como transferência de ficheiros (FTP) ou navegação web (HTTP).
- **UDP (User Datagram Protocol)**: é um protocolo não orientado à conexão, ou seja, não há uma ligação estabelecida antes da transmissão dos dados, e não há garantia de entrega ou ordem dos pacotes. Por isso, é mais rápido e eficiente em termos de overhead. Exemplo: Usado em aplicações onde a velocidade é mais importante que a fiabilidade, como streaming de vídeo ou jogos online.

### Tamanho máximo dos pacotes e MTU

O tamanho máximo de um pacote (datagrama) depende do **MTU (Maximum Transfer Unit)**, que define o maior tamanho de pacote que pode ser transmitido numa rede sem ser fragmentado. No caso do IP (Internet Protocol), o MTU é de 1500 bytes na Ethernet. Quando um pacote excede o tamanho do MTU, ele é fragmentado em pacotes menores.

### Funções da camada de transporte

- **Segmentação (TCP/UDP)**: a camada de transporte divide os dados em segmentos (TCP) ou datagramas (UDP), que são posteriormente enviados pela rede.
- **Controlo de erros (TCP)**: o TCP deteta e corrige erros nos pacotes, através de mecanismos como checksums, retransmissões e confirmações de recebimento (ACK).
- **Entrega ordenada (TCP)**: garante que os pacotes sejam entregues pela rede e reagrupados na ordem correta.
- **Controlo de congestão (TCP)**: o TCP ajusta a taxa de envio de pacotes com base nas condições da rede, evitando congestionamentos e perda de pacotes.
- **Entrega em tempo útil (UDP)**: o UDP, por ser mais simples, é usado em aplicações onde a rapidez é mais importante que a fiabilidade, como transmissão de áudio ou vídeo em tempo real.
- **Garantia de largura de banda**: algumas implementações podem garantir uma largura de banda mínima para a comunicação, embora isso seja mais comum em protocolos específicos de qualidade de serviço (QoS).

### Fragmentação de pacotes

O tamanho ideal para fragmentar um pacote depende da eficiência e do risco de erros:

- **Pacotes grandes**:
    - Podem requerer nova fragmentação.
    - Aumenta o risco de o pacote ser descartado em caso de erro.
- **Pacotes pequenos**:
    - Causam overhead (sobrecarga), devido ao processamento extra necessário para lidar com muitos pacotes pequenos.
    - Reduzem a eficiência da transmissão.

Os tamanhos máximos dos pacotes variam com o protocolo IP:

- **IPv4**: até 64 KB.
- **IPv6**: pode atingir até 5 GB, o que aumenta a flexibilidade para transmissões futuras.

### Multiplexagem e desmultiplexagem

- **Multiplexagem**: a camada de transporte recebe dados de várias aplicações e encapsula-os em pacotes para serem enviados pela rede. Permite que várias comunicações ocorram simultaneamente num único canal de comunicação.
- **Desmultiplexagem**: no destino, a camada de transporte reencaminha os pacotes para as aplicações corretas, com base em identificadores como os números de porta.

### Estados de um socket

Um socket pode estar em vários estados durante uma comunicação. Alguns dos principais estados são:

- **LISTENING**: o socket está à espera de conexões de entrada (estado usado em servidores).
- **CONNECTED**: o socket está num estado de conexão ativa, pronto para enviar e receber dados.
- Outros estados incluem **CLOSED**, **SYN_SENT**, **SYN_RECEIVED**, **FIN_WAIT**, entre outros, que fazem parte do processo de estabelecimento e encerramento de conexões TCP.

### Orientado à conexão vs não orientado à conexão

- **Orientado à conexão (TCP)**: antes de transmitir dados, é estabelecida uma ligação entre o emissor e o recetor, através de um processo de handshake (aperto de mão) de três vias. Garante entrega fiável, ordenada, e inclui mecanismos para controlo de erro e fluxo. Exemplo: HTTP, FTP.
- **Não orientado à conexão (UDP)**: não há ligação estabelecida, o que resulta em menor overhead. Os pacotes são enviados independentemente uns dos outros, sem garantias de entrega ou ordem. Exemplo: DNS, streaming.

### Questão: Porque usar não orientado à conexão (UDP)?

- **Overhead muito pequeno**: como o UDP não precisa de estabelecer e manter uma conexão, o seu overhead é muito menor que o do TCP.
- **Rapidez e eficiência**: o UDP é muito mais rápido em aplicações onde a perda de alguns pacotes é aceitável, como em jogos online e chamadas VoIP.
- **Aplicação decide o tamanho do datagrama**: a aplicação pode escolher o tamanho do datagrama, sem a necessidade de fragmentação pelo protocolo.

### Funções do TCP vs UDP

- **TCP**:
    - Conexão fiável.
    - Entrega ordenada.
    - Retransmissão em caso de erro.
    - Controlo de fluxo e congestão.
- **UDP**:
    - Comunicação rápida e simples.
    - Sem garantias de entrega ou ordem.
    - Adequado para aplicações onde o tempo real é mais importante que a fiabilidade (ex: streaming).