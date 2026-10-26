---
id: engenharia-de-prompts
title: Engenharia de Prompts
sidebar_position: 1
---

# Engenharia de Prompts

## O que é um Prompt?

Um prompt é basicamente o texto que você digita para conversar com a Inteligência Artificial antes que ela gere uma resposta. É através dos prompts que você instrui o modelo sobre a tarefa que precisa ser feita e garante que a resposta final seja útil.

A estrutura de um bom prompt costuma ter diversos elementos combinados:
* **Instruções:** As exigências que diz exatamente como o modelo deve agir;
* **Perguntas:** O problema que você quer resolver ou a informação que deseja descobrir;
* **Dados de entrada:** Informações, tabelas ou documentos em texto que o modelo deve processar.Um texto de apoio, uma tabela ou um contexto que a máquina precisa ler antes de elaborar a resposta;
* **Exemplos:** Demonstrações do formato, padrão ou exemplos de como você espera que seja a resposta.

Se o seu prompt for muito vago ou mal estruturado, o modelo responde sem uma base de adequada e pode resultar em alucinações (informações inventadas).

## O que é Engenharia de Prompts?

A engenharia de prompts é uma área recente focada em projetar o comando perfeito para extrair o melhor resultado possível de uma IA. Os prompts funcionam como uma forma de programação, permitindo controle sobre o formato e o comportamento das respostas dos Grandes Modelos de Linguagem (LLMs)

Como modelos diferentes respondem de formas distintas às mesmas instruções, é necessário testar, ajustar cada prompt e entender os limites de cada ferramenta.

## Por que a Engenharia de Prompts é importante?

A necessidade de estruturar seus comandos com método está diretamente interligada com o jeito que as redes neurais funcionam:

* **Pouca Memória (Ausência de Estado):** Normalmente, os modelos de linguagem não guardam o histórico de quem você é ou do que fez em sessões passadas. Por isso, o seu prompt precisa fornecer todo o contexto necessário para que a IA entenda o cenário atual a cada nova sessão.

* **Limites de Tokens (Janela de Contexto):** A IA tem um limite máximo de "palavras" (tokens) que consegue ler e escrever em cada resposta. Um prompt planejado otimiza esse espaço, não desperdiçando a memória de processamento da máquina.

* **Controle e Confiabilidade:** Como a IA é probabilística (ela calcula qual palavra mais provável depois da outra), um comando estruturado evita que ela alucine, produza respostas inventadas ou fuja do formato solicitado.

## Estratégias e Padrões 

Para otimizar os resultados e guiar o comportamento da Inteligência Artificial de forma mais previsível, a comunidade técnica consolidou algumas estratégias:

* **Cadeia de Pensamento (Chain of Thought):** É a técnica de solicitar para a IA explicar seu raciocínio passo a passo. Quando você exige que o algoritmo a demonstre sua lógica antes da resposta final, aumenta a probabilidade do modelo entregar dados precisos e  corretos.

* **Padrões de Contexto (Hidden Prompts):** Consiste em solicitar um conjunto de regras que definem uma persona com restrições a IA. Por exemplo, "Aja como um historiador e nunca invente datas". Essa é uma maneira confiável de impor limites as respostas geradas sem que perca a formatação no decorrer da sessão.

* **Catálogo de Padrões (Prompt Patterns):** De forma análoga à engenharia de software tradicional, existem soluções padronizadas e reutilizáveis para estruturar a entrada. Esses padrões servem para customizar a formatação da resposta, automatizar a identificação de erros (como a geração de listas de verificação de fatos associadas à saída) e refinar fluxos de interação.

* **Catálogo de Padrões (Prompt Patterns):** Existem "fórmulas" prontas para auxiliar nos prompts de problemas comuns. Esses padrões servem para formatar respostas, automatizar tarefas maçantes ou exigir que a IA verifique os fatos antes de gerar a resposta.

---

## Referências Bibliográficas

* **OpenAI Developer Cookbook.** *Techniques to improve reliability*. Disponível em: [https://developers.openai.com/cookbook/articles/techniques_to_improve_reliability](https://developers.openai.com/cookbook/articles/techniques_to_improve_reliability).
* **DAIR.AI.** *Prompt Engineering Guide*. Disponível em: [https://www.promptingguide.ai/pt](https://www.promptingguide.ai/pt).
* **White, J. et al. (2023).** *A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT*. Disponível em: [https://arxiv.org/pdf/2302.11382](https://arxiv.org/pdf/2302.11382).
* **Brex (2023).** *Prompt Engineering Guide: Tips and tricks for working with Large Language Models*. Disponível em [https://github.com/brexhq/prompt-engineering](https://github.com/brexhq/prompt-engineering).
* **Amatriain, X. (2023).** *Prompt Engineering 101: Introduction and resources*. Disponível em: [https://amatria.in/blog/PromptEngineering](https://amatria.in/blog/PromptEngineering)