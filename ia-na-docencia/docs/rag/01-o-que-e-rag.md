---
id: o-que-e-rag
title: O que é RAG?
sidebar_position: 1
---

# O que é RAG?

Os Grandes Modelos de Linguagem (LLMs), como o ChatGPT, Gemini e Claude, funcionam prevendo as palavras mais prováveis. Eles possuem um grande conhecimento, porém limitado, pois não têm acesso a informações muito específicas e privadas, e seu conhecimento congela na última data em que foram treinados. Então, se o usuário perguntar a uma IA genérica sobre uma norma específica da sua empresa ou sobre um artigo científico recém-publicado, a IA provavelmente inventará uma resposta (fenômeno conhecido como alucinação).

A Geração Aumentada por Recuperação (RAG - Retrieval-Augmented Generation) é a técnica criada para resolver exatamente esse problema. Ela conecta a inteligência de conversação da IA a um banco de dados confiável e específico.

:::info[Analogia]
    Pense que uma IA convencional é como um aluno fazendo uma prova de memória, ele pode esquecer um detalhe ou chutar a resposta errada (Alucinação). Enquanto o RAG é como se fosse um aluno fazendo prova com consulta, antes de responder ele olha os livros e verifica a resposta.
:::

## Como funciona na prática?

O processo acontece em três etapas invisíveis para o usuário, que ocorrem em questão de segundos:

* **Recuperação (Retrieval):** Quando uma pergunta é feita, o sistema não envia direto para a IA responder. Primeiro, ele transforma a pergunta em uma fórmula matemática e faz uma varredura em um banco de dados. O sistema retorna apenas os parágrafos que têm o mesmo sentido da pergunta.

* **Aumento (Augmentation):** O sistema junta a pergunta original feita pelo usuário com os parágrafos que acabou de encontrar no banco de dados. 

* **Geração (Generation):** Esse agrupamento de pergunta e textos de referência é enviado para o modelo de linguagem (LLM). A IA lê os textos fornecidos e gera uma resposta em linguagem natural, baseada exclusivamente naqueles documentos e citando a fonte de onde tirou a informação.

## As Vantagens do RAG 

A maior vantagem do RAG é que você pode enviar os seus próprios documentos para a IA em vez de depender do conhecimento genérico da internet. A inteligência artificial passa a trabalhar com o material que você forneceu e insere a referência na qual a resposta foi fundamentada. Além disso, diminui as alucinações: se a resposta não estiver no seu material, ela diz que não sabe em vez de inventar.

## Como o RAG está disponível nas ferramentas atuais?

As principais empresas de inteligência artificial já embutiram essa arquitetura em suas ferramentas comerciais:

* **Google NotebookLM:** Funciona como um "caderno virtual" onde o usuário faz o upload de arquivos, como PDFs, links e anotações. A ferramenta analisa apenas o que foi enviado para criar resumos, responder dúvidas sobre os textos e pode até gerar um podcast em áudio debatendo o conteúdo, garantindo que as respostas não saiam do escopo dos materiais originais.

* **ChatGPT (GPTs Customizados):** Na versão paga da OpenAI, é possível criar um "GPT" personalizado. O usuário faz o upload de documentos e configura o modelo com instruções específicas para que ele responda e atue baseando-se exclusivamente naquela base de conhecimento fornecida.

* **Claude (Projects):** O modelo da Anthropic possui o recurso "Projects", onde é possível anexar documentos e definir instruções de comportamento. O Claude usará a técnica de RAG para gerar as respostas sem misturar os dados com informações externas.

## Referências Bibliográficas
* **LEWIS, Patrick et al. (2020).** *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks*. Disponível em: [https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401).
* **AMAZON WEB SERVICES (AWS).** *O que é a RAG? - Explicação sobre a geração aumentada de recuperação*. Disponível em: [https://aws.amazon.com/pt/what-is/retrieval-augmented-generation/](https://aws.amazon.com/pt/what-is/retrieval-augmented-generation/).
* **IBM.** *O que é geração aumentada de recuperação (RAG)?*. Disponível em: [https://www.ibm.com/br-pt/topics/retrieval-augmented-generation](https://www.ibm.com/br-pt/topics/retrieval-augmented-generation).
* **ORACLE.** *O que é a Geração Aumentada de Recuperação (RAG)?*. Disponível em: [https://www.oracle.com/br/artificial-intelligence/generative-ai/retrieval-augmented-generation-rag/](https://www.oracle.com/br/artificial-intelligence/generative-ai/retrieval-augmented-generation-rag/).