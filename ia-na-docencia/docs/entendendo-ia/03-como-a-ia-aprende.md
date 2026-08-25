---
id: como-a-ia-aprende
title: Como aprende?
sidebar_position: 3
---

# Como a Inteligência Artificial aprende?

Quando fazemos uma solicitação a IA e ela gera uma resposta, é importante deixar claro que **a IA não sabe o que está dizendo, ela apenas calcula o que deve dizer.**

Quando a Inteligência Artificial vai compor um texto, ela quebra as palavras em pedaços chamados *Tokens* e calcula a probabilidade do próximo token para gerar a frase levando em consideração o contexto.

Por exemplo, se você digita "maçã" os tokens relacionados a "fruta", "vermelha", "torta" e "banana" acendem e ficam mais próximos nas opções de resposta, já que nos dados de treinamento essas palavras são vistas juntas com frequência. Em seguida é analisado o contexto, se você digitar "Fui à feira e comprei uma maçã...", a probabilidade de a próxima palavra ser "vermelha" ou "madura" é altíssima. Ao contrário de você digitar "Meu notebook quebrou, vou na loja da Maçã...",a probabilidade de "banana" despenca para quase zero, e as palavras "comprar" ou "assistência" sobem.

Essa é só uma das áreas que a IA precisa transformar em matemática para saber processar. O mesmo acontece quando se trata de imagens. Um computador não tem olhos. Quando ele analisa uma foto, ele não vê formas ou cores, ele vê uma gigantesca tabela (matriz) de números. Cada número representa a intensidade de luz e cor de um único *pixel*. Quando a IA aprende a reconhecer um pássaro, por exemplo, significa encontrar o mesmo padrão numérico que sempre se repete em outras fotos e rotular como "pássaro".


## Machine Learning e Deep Learning

Na programação clássica, o computador era literal e o ser humano precisava escrever as regras exatas para a máquina processar os dados e gerar uma resposta. 

:::info[Exemplo]
 Se a nota for maior que 70, imprima "Aprovado". Se for menor, imprima "Reprovado"
:::

No **Machine Learning**, nós invertemos essa lógica. O programador não escreve mais as regras. Ele fornece à máquina os **Dados** e as **Respostas corretas**, e pede para que a própria máquina descubra quais são as regras/padrões que ligam uma coisa à outra.

O aprendizado acontece em um ciclo de tentativa e erro chamado de **Treinamento**. Imagine que você quer ensinar a IA a diferenciar a foto de um carro e um caminhão. Ela recebe uma foto de carro e determina o rótulo "caminhão", nós corrigimos para "carro" e a máquina ajusta as seus cálculos internos para que, na próxima vez que vir aqueles mesmos números, a chance de dizer "carro" seja maior.Se você repetir isso milhões de vezes com milhões de fotos, a máquina eventualmente calibra seus cálculos tão bem que passa a acertar quase 100% das vezes.

O **Machine Learning (ML)** é um conjunto de algoritmos estatísticos como Árvores de Decisões, que encontram padrões em bases de dados. No ML clássico, a máquina ainda precisa de muita ajuda humana. Se você quiser ensinar a máquina, precisa indicar manualmente as características e supervisionar o aprendizado.

Já o **Deep Learning** é um subtipo de *Machine Learning* mais evoluido. Ele foi o responsável pela grande ascênção da IA, pois resolveu a dependência da intervenção humana para classificar dados. Esse modelo abandona os algoritmos estatísticos simples e usa as **Redes Neurais Artificiais Profundas**. 

O termo "Profundo" (Deep) refere-se à quantidade de camadas ocultas de processamento que existem entre a entrada do dado e a resposta final.

No Deep Learning você não diz à rede o que ela *deve* procurar para identificar um objeto. Você simplesmente entrega 10 milhões de fotos brutas desse objeto e as primeiras camadas da rede neural detectam sozinhas as bordas e linhas, as camadas do meio começam a reconhecer os formatos e as camadas finais juntam tudo para entender o conceito do "objeto". A máquina *descobre sozinha* quais são as características importantes.

### Rede Neural

Uma Rede Neural é uma estrutura de cálculos inspirada nos neurônios do nosso cérebro. Ela é dividida em muitas "camadas":

*   **Camada de Entrada:** Onde a informação entra 
*   **Camadas Ocultas:** Várias camadas de "neurônios matemáticos" trabalhando juntos. Um neurônio tenta entender o sujeito da frase, outro analisa o verbo, outro verifica a pontuação
*   **Camada de Saída:** Onde a máquina entrega a decisão final
---

## A relação entre IA e Matemática

Para traduzir problemas complexos para o computador, a IA se apoia em grandes pilares matemáticos:

### 1. Álgebra Linear 
É usada para lidar com questões da linguagem e da representção de iamgens no computador. Para que ele processe essas informações, a Álgebra Linear transforma tudo em matrizes e vetores. 
*   **Em Imagens:** Uma foto é representada matematicamente como uma grande grade numérica (matriz), onde cada número indica o brilho e a cor de um ponto específico (pixel). 
*   **Em Textos:** As palavras são transformadas em vetores dentro de um espaço semântico. É por isso que a máquina consegue calcular a "distância" entre as palavras, sabendo que "Aluno" e "Estudante" estão matematicamente próximos, mas "Aluno" e "Geladeira" estão distantes.

### 2. Probabilidade e Estatística 
Para a parte analítica e a tomada de decisões, a IA utiliza ferramentas da área da estatística.Ela faz previsões baseadas em dados anteriores. Quando uma Inteligência Artificial Generativa escreve uma frase, ela não está *raciocinando* sobre o significado da mensagem, mas sim calculando *"Considerando as palavras anteriores, qual é a palavra com maior probabilidade estatística de vir agora?"* e escolhendo a palavra matematicamente mais provável.

### 3. Cálculo
Essa parte entre no ajuste de erros e na otimização (como o gradiente descendente) para a IA *aprender* e melhorar suas respostas. Faz o ajuste dos parâmetros internos da rede neural usando derivadas matemáticas para saber qual direção deve ajustar seus pesos e melhorar o desempenho.

### As Alucinações

Compreender que a IA funciona através de estatística e otimizações explica o fenômeno das **alucinações**. Como a IA apenas calcula a palavra mais provável, se ela não tiver bons dados de treinamento, vai retornar palavras que soam corretas gramaticalmente, mas a informação que geram são inventadas/falsas. A base matemática não serve apenas para construir a máquina, mas é o que nos permite validar os resultados e garantir que podemos confiar nas decisões tomadas por esses sistemas.