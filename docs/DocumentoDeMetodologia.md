# Documento de Metodologia

## Histórico de Revisão

| Data       | Versão | Descrição   | Autor     |
| ---------- | ------ | ----------- | --------- |
| 03/03/2022 | 0.1    | início da criação dos tópicos da introdução | [@Madu01](https://github.com/Madu01) e [@Elios630](https://github.com/Elios630) |
| 04/03/2022 | 0.2    | adição de conteúdos nos tópicos 4, 5 e 6 | [@Madu01](https://github.com/Madu01) |
| 04/03/2022 | 0.3    | adição de conteúdos nos tópicos 1, 2 e 3 | [@Elios630](https://github.com/Elios630) |



## 1. Introdução

Neste documento será mostrado visão geral das metodologias adotadas para o desenvolvimento ágil, elas são a metodologia scrum e a metodologia kanban.

A metodologia scrum tem foco em flexibilidade dos resultados, times pequenos, revisões constantes em sprints e colaboração mútua, enquanto a metodologia kanban tem foco em disciplina, transparência, priorização e adaptação.


## 2. Papéis

A equipe foi dividida nos seguintes papéis:

### 2.1. DevOps

#### Atribuições

- Realizar a conteinerização do ambiente;
- Distribuir as responsabilidades e tarefas;
- Documentar as Sprints da semana e passadas.
- Assegurar a integração e deploy contínuo da equipe.

### 2.2. Arquitetos

#### Atribuições:

- Identificar e estudar as tecnologias a serem utilizadas;
- Definir como o Backlog do produto será feito;
- Fazer o diagrama de Arquitetura;
- Ajudar o restante da equipe no estudo da tecnologia utilizada.

### 2.3. Product Owner

#### Atribuições

- Fazer a visão do produto para a equipe;
- Montar a lista de prioridade de desenvolvimento;
- Definir quais serão os requisitos do projeto;
- Definir os critérios de aceitação para o cliente.

### 2.4. Scrum Master

#### Atribuições

- Verificar que a equipe siga a metodologia proposta;
- Fazer o controle de qualidade dos arquivos desenvolvidos;
- Acompanhar o progresso da equipe.

### 2.5. Desenvolvedores

#### Atribuições:

- Utilizar as técnicas de boa prática de programação;
- Entregar as tarefas das Sprints;
- Criar testes para assegurar a estabilidade do código.

## 3. metodologia scrum

Abaixo alguns ritos do Scrum que serão realizados pelo time do projeto Sigaa-Plus.

### 3.1. Sprint

- Duração de 7 dias(1 semana);
- Utilizado para ter entrega contínua;
- time box: início toda terça-feira e fecha na terça-feira.

### 3.2. Planejamento da Sprint

- Reunião com todos os integrantes na terça-feira;
- Definição das atividades a serem entregues;
- Definição de quais equipes farão a atividade.

### 3.3. Revisão da Sprint

- Revisão dos objetivos alcançados;
- Revisão e reflexão dos objetivos não alcançados;
- Repassar objetivos não alcançados na próxima sprint.

### 3.4. Retrospectiva da Sprint

- Observar os sucessos;
- Observar os erros;
- Analisar como melhorar os erros;

## 4. metodologia kanban
O kanban é uma metodologia ágil desenvolvida para organizar as tarefas de uma empresa ou projeto. Essa metodologia é fácil de ser implementada ela também ajuda a mensurar a produtividade, identificar problemas e otimiza o fluxo de trabalho. 

No caso do nosso projeto, estamos utilizando dois kanbans:
- **kanban do projects:** As colunas representam as sprints de modo a facilitar a visualização de issues criadas por sprint e do Roadmap do produto. Está disponível em [Roadmap do produto](https://github.com/fga-eps-mds/2021.2-Sigaa-Plus/projects/2). 
- **kanban do ZenHub:** É utilizado na aba Board da extensão ZenHub para o gerenciamento das issues. Está disponível em [Board](https://github.com/fga-eps-mds/2021.2-Sigaa-Plus/projects/2#workspaces/tema-02-61fbe43eee3f2e001039033f/board).  

## 5. Gerenciamento
### 5.1 Cumulative flow

Monitora o fluxo das issues em cada pipeline do kanban do ZenHub. As pipelines são as colunas presentes no kanban. 

### 5.2 Control chart

É uma ferramenta para estimar quanto tempo um problema leva do início ao fim. Pode ajudar a prever o tempo com que os problemas futuros serão resolvidos, identifica gargalos e eficiências em cada estágio do desenvolvimento do projeto.   

### 5.3 Burndown report

Ajuda no cumprimento de prazos de forma mais previsível. As sprints são usadas com problemas estimativos para visualizar um gráfico da velocidade em que o trabalho precisa ser concluído para terminar os problemas incluídos na sprint.  

### 5.4 Velocity tracking

É uma ferramenta ágil que mostra a velocidade histórica do trabalho calculando a pontuação média do grupo obtida em cada sprint.  

## 6. Cronograma de encontros

| Dias | Horários | Integrantes | Finalidade |
|------|----------|-------------|------------|
| Terças |  18h | Scrum Master's e DevOps de cada time | Planejamento da sprint |
| Terças |  19h | Todos os integrantes | Ponto de controle geral |
| Quintas | 19h | Times A e B separadamente| Ponto de controle de cada grupo | 
| Quintas | 20h | Product Owner's e Arquitetos| Definifição/execução de tarefas |

Observação: A quantidade de reuniões, os dias e os horários podem sofrer alterações de acordo com as necessidades e demandas do projeto.

## 7. Referências

> Documento de metodologia : AMIKA. Disponível em: https://fga-eps-mds.github.io/2019.2-Amika-Wiki/#/docs/projeto/metodologia?id=metodologia. Acesso em 03/03/2022;
> Documento de metodologia : FAMil. Disponível em: https://fga-eps-mds.github.io/2021-1-hospitalar/#/produto/metodologia/metodologia?id=metodologia. Acesso em 03/03/2022.
