---
title: "Formulação e tipos de problemas"
subtitle: "Inteligência Artifical"
description: "Apresentação de conteúdos concisos."
date: "23-09-2024"
author: "Pedro Pereira"
---

### Agente

Um **agente** é uma entidade que percepciona o ambiente, coleta informações sobre ele, toma decisões com base nessas perceções, e executa ações que alteram o estado do ambiente. Em Inteligência Artificial, um agente pode ser qualquer sistema (um programa, um robô, etc.) que interage com o mundo à sua volta com o objetivo de alcançar um determinado objetivo.

### Formulação de problemas

A resolução de problemas em Inteligência Artificial segue o seguinte processo:

1. **Formular**: definir claramente o problema a ser resolvido.
    - Quais são as **ações** que o agente pode tomar?
    - Quais são os **estados** possíveis que o agente pode alcançar?
    - Como **avaliar os estados** de forma a saber se estão a aproximar ou afastar-se do objetivo?
2. **Procurar**: encontrar uma **sequência de ações** que leva o agente do estado inicial ao estado objetivo.
3. **Executar**: após encontrar uma solução (sequência de ações), o agente executa essa sequência no ambiente.

### Estrutura de um problema

Um problema de IA típico inclui:

- **Estado inicial**: o ponto de partida.
- **Estados intermédios**: estados pelos quais o agente passa ao executar as ações.
- **Estado objetivo**: o estado final que se pretende alcançar.

### Tipos de problemas

1. **Estado único**: o agente tem um único estado de conhecimento do mundo, ou seja, conhece completamente o estado atual e as consequências das ações.
2. **Múltiplos estados**: o agente não tem certeza absoluta sobre o estado atual e pode ter várias hipóteses em consideração.
3. **Contingência**: o agente precisa de lidar com incertezas, onde as ações podem ter diferentes consequências com base em fatores externos não controláveis.
4. **Exploração**: o agente está a explorar o ambiente, geralmente em casos onde o ambiente não é conhecido de antemão.

### Tipos de soluções

- **Satisfatória**: uma solução que é aceitável, mesmo que não seja ótima.
- **Semi-ótima**: uma solução que é quase a melhor possível, mas pode não ser perfeita.
- **Ótima**: a melhor solução possível, de acordo com algum critério de avaliação.

### Ambiente

- **Determinístico**: o resultado das ações é previsível e conhecido.
- **Parcialmente acessível**: o agente tem acesso limitado à informação sobre o estado do ambiente.
- **Não determinístico**: o resultado das ações é incerto e varia, mesmo em condições semelhantes.

### Procura em árvore

A **procura em árvore** consiste em representar o problema como um grafo, onde cada nó representa um estado, e as arestas (ligações entre nós) representam as ações que levam de um estado a outro. A procura é o processo de explorar os diferentes caminhos no grafo para encontrar a sequência de ações que leva do estado inicial ao objetivo.

### Estratégias de procura

Ao escolher uma estratégia de procura, são usados vários critérios para avaliar a sua eficácia:

- **Completude**: garante que a estratégia encontrará uma solução, se ela existir.
- **Complexidade no tempo**: o tempo necessário para encontrar a solução.
- **Complexidade no espaço**: a quantidade de memória necessária.
- **Otimização**: se a estratégia encontra a melhor solução possível.

### Critérios de avaliação da procura

- **b**: fator de ramificação máximo (número máximo de filhos de um nó).
- **d**: profundidade da melhor solução (a profundidade à qual se encontra a solução ideal).
- **m**: profundidade máxima do espaço de estados (a maior profundidade que um nó pode atingir no grafo de procura).
- **l**: profundidade limite da procura (um limite imposto para parar a exploração do grafo).

### Estratégias de procura

Existem duas grandes categorias de estratégias de procura:

1. **Procura não informada**: também chamada de "procura cega", não utiliza nenhuma informação adicional além da definição do problema (por exemplo, procura em largura ou profundidade).
2. **Procura informada**: utiliza informação adicional (geralmente chamada de heurística) para guiar a procura em direção ao estado objetivo de forma mais eficiente (exemplo: algoritmo A*).

### BFS (Breadth-First Search)

A **procura em largura (BFS)** explora todos os nós a uma determinada profundidade antes de avançar para a próxima. É mais adequada para problemas em que a solução está perto do estado inicial ou em **árvores pequenas**.

### DFS (Depth-First Search)

A **procura em profundidade (DFS)** explora um caminho inteiro até a sua profundidade máxima antes de voltar atrás e explorar outros caminhos. É útil quando há uma **limitação de memória** ou quando os caminhos são longos e ramificados, embora possa não ser completa em grafos infinitos ou profundos.

### Procura de custo uniforme

A **procura de custo uniforme** é uma variação da procura em largura, mas ao invés de explorar nós por profundidade, explora os nós com base no custo acumulado das ações. É útil quando as ações têm custos diferentes, permitindo encontrar o caminho com o custo mais baixo para o objetivo.

### Procura iterativa (aprofundamento progressivo)

A **procura iterativa** é uma combinação de procura em profundidade e largura. Basicamente, executa uma procura em profundidade até um limite de profundidade, e se não encontrar a solução, aumenta esse limite e repete o processo. É completa e utiliza menos memória que a procura em largura.

### Procura bidirecional

A **procura bidirecional** procura a solução a partir de dois pontos: do estado inicial para o estado objetivo e do estado objetivo para o estado inicial, simultaneamente. Quando as duas buscas se encontram, a solução é encontrada. Esta estratégia é eficiente em termos de tempo, pois reduz significativamente o espaço de procura.