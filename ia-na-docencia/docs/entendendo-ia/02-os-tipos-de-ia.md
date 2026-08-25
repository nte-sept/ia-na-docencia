---
id: os-tipos-de-ia
title: Os tipos
sidebar_position: 2
---

# Os Tipos de Inteligência Artificial

A Inteligência Artificial pode ser categorizada através de múltiplas lentes: sua **capacidade intelectual**, seu **capacidade de memória**, seus **paradigmas de aprendizado** e, por fim, as **formas de aplicação**.

## 1. Classificação por Capacidade Intelectual

Nessa classificação, os modelos de Inteligência Artificial são separados em relação a quão inteligêntes e similares a forma de pensar e aprender humana eles são:

*   **Inteligência Artificial Estreita (ANI - Artificial Narrow Intelligence):** 
    Também chamada de *IA Fraca*, **é a única forma de IA que existe atualmente**. A ANI é treinada para realizar uma única tarefa com eficiência. O algoritmo responsável por seu funcionamento precisou ser treinado por *forças humanas* e sua capacitadade de resposta está estritamente relacionada a qualidade dos dados usados durante seu treinamento. Esses modelos não possuem autoconsciência ou capacidade de raciocinar fora de sua programação.

*   **Inteligência Artificial Geral (AGI - Artificial General Intelligence):** 
    Ainda existênte somente na teoria, a AGI seria um sistema com uma inteligência cognitiva equivalente à humana.Também pode ser chamda de *IA Forte*. Ela conseguiria aprender, raciocinar e se adaptar a qualquer demanda nova *sem forças humanas* guiando sua evolução ou indicando como deve agir em cada situação.

*   **Superinteligência Artificial (ASI - Artificial Superintelligence):** 
    É o modelo mais famoso nas ficções científicas, e ainda mais teórico que a AGI. A ASI seria uma entidade autoconsciente que superaria as mentes humanas em todos os campos possíveis, desde criatividade, raciocínio até inteligência emocional. Esse modelo é totalmente independente de humanos, desde seu aprendizado até o sistema de escolhas.
---

## 2. Classificação por Capacitade de Memória

Outra forma de classificar as IAs é em relação a como ela utiliza a memória e o ambiente para tomar decisões:

*   **Máquinas Reativas:** Não possuem memória, então não aprendem com o tempo. São modelos que analisam e respondem aos estímulos momentâneos perdendo o aprendizado quando se encerra. Um exemplo desse modelo é o *Deep Blue*, um supercomputador que derrotou o vencedor mundial de xadrez em 1997.

*   **Memória Limitada:**  São sistemas que conseguem aprender com grandes volumes de dados passados e guardar memórias temporárias para melhorar decisões de curto prazo. A maioria das IAs modernas está nessa categoria, por exemplo, os chatbots que lembram do que você digitou no início da conversa.

*   **Teoria da Mente:** Ainda em desenvolvimento, essa IA conseguiria compreender que os humanos ao seu redor possuem sentimentos, crenças e expectativas. Ela adaptaria seu comportamento com base na leitura social e emocional de quem está interagindo com ela.

*   **Autoconsciência:** Também teórico, nessa categoria a IA teria plena consciência de sua própria existência, de suas limitações e de sua constituição. 
---

## 3. Classificação por Paradigmas de Aprendizado

Dentro dessa categoria, podemos subdivir entre aprendizado via *Machine Learning* e via *Deep Learning*:

### Aprendizado por Machine Learning
Nessa categoria, a IA é treinada com dados e essa abordagem pode ser feita de três formas diferentes:

*   **Aprendizado Supervisionado:** O treinamento é feito usando um conjunto de dados onde os seres humanos atribuem rótulos para cada tipo de saída.

:::info[Exemplo]
Pense como enviar 10 mil fotos marcadas como "isso é um gato" e "isso não é um gato" para que o algoritmo aprenda a mapear as similaridades e reconheça no futuro
:::

*   **Aprendizado Não Supervisionado:** O modelo recebe uma grande gama de dados brutos, sem nenhum rótulo, e seu objetivo é encontrar sozinho padrões, agrupamentos (clusters) e estruturas ocultas.

:::info[Exemplo]
Pense num modelo responsável por analisar os padrões de compra de uma determinada loja e precisa prever quais vão ser os produtos mais comprados no próximo mês
:::

*   **Aprendizado por Reforço:** Baseado em tentativa e erro e funções de recompensa. O modelo é colocado em um ambiente virtual e recebe pontuações positivas ou negativas dependendo de suas ações, ajustando sua resposta até atingir o esperado. 

:::info[Exemplo]
Pense em softwares de treinamento de carros autômatos, sempre que o algoritmo desvia corretamente de um obstáculo é atribuido uma nota positiva e se não reage corretamente uma nota negativa, até o modelo entender como deve se comportar 
:::

### Aprendizado por Deep Learning

Essa abordagem é um subgrupo do Machine Learning e também usa dados para treinamento. A grande diferença entre as duas é o uso de **Redes Neurais Artificiais Profundas**.

Nesse modelo é usado dezenas ou centenas camadas de processamento que permitem manipular e categorizar dados não estruturados sem a intervenção humana.

:::tip
Você pode se aprofundar mais na diferença entre Machine Learning e Deep Learning e como é o aprendizado na IA nesse [link](03-como-a-ia-aprende.md).
:::

## 4. Classificação por Formas de Aplicação

| Categoria | Aplicação |
| :--: | :--: |
|**IA tradicional**| Automatiza e otimiza tarefas específicas ou repetitivas com eficiência e precisão. Pode conter modelos de IA preditiva e IA conversacional|
|**IA Conversasional**| Responsável pelos chatbots e assistentes virtuais usarem linguagem natural. Depende de modelos de NLP (processamento de linguagem natural) e visão computacional para entender a fala e gerar respostas semelhantes às humanas|
| **IA Preditiva / Analítica** | Analisa grandes volumes de dados históricos para encontrar padrões e prever o futuro| 
| **IA Generativa** | Aprende padrões para criar conteúdos totalmente novos. Pode gerar textos, imagens, códigos, áudios ou vídeos|
| **IA Multimodal** |Esses modelos conseguem processar e relacionar dados de diferentes tipos de fontes como textos, imagens, vídeos e áudios simultaneamente| 
---

### IA Generativa

A IA Generativa ganha um destaque especial por ser capaz de codificar seus dados de treinamento e usá-los para gerar conteúdo novo. Ela é subdividida em três grupos:

*   **Autocodificadores Variacionais (VAEs):** Modelos antigos (2013) que geravam variações de dados existentes
*   **Modelos de Difusão:** Eles inserem propositalmente "ruído" visual em dados até ficarem irreconhecíveis e, em seguida, revertem o processo removendo o ruído para gerar imagens (como Midjourney e o DALL-E).
*   **Transformadores:** É o principal responsável pela existência dos modelos LLMs (Grandes Modelos de Linguagem) como o ChatGPT, Gemini, Claude etc. Em vez de ler um texto palavra por palavra, o modelo usa o contexto global para calcular matemáticamente qual a próxima palavra exata que faz mais sentido para formar a resposta. 

Além disso, a nova era das IA generativas está se transformando nos *agentes de IAs* que basicamente é um programa instalado no seu dispositivo que tem capacidade de executar outros programas e pensar mais profundamente em um problema sem depender tanto da interferência humana. Você pode se aprofundar mais sobre isso nesse [guia de agentes](.)

Além disso, a nova era da IA Generativa está evoluindo para os *Agentes de IA*, que são capazes de perceber o ambiente, tomar decisões e realizar ações com menos interferência humana. 

Em vez de apenas responder a perguntas, ele consegue quebrar problemas complexos em etapas, raciocinar e interagir com outros aplicativos (como enviar um e-mail automaticamente). Você pode se aprofundar mais sobre isso neste [guia de agentes](.).

