# Documento de Visão

## Histórico de Revisão

| Data       | Versão | Descrição                                                 | Autor(es)                                                                                                                                             |
| ---------- | ------ | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31/01/2022 | 1.0    | Abertura do Documento                                     | [@eng-Bruno](https://github.com/eng-Bruno)                                                                                                            |
| 02/02/2022 | 1.1    | Adição do escopo e de mais algumas informações do projeto | [@beatrizSO](https://github.com/beatrizSO), [@HianPraxedes](https://github.com/HianPraxedes) e [@EduardaSMarques](https://github.com/EduardaSMarques) |
| 24/02/2022 | 2.0    | Completando documento e atualizando algumas informações | [@HianPraxedes](https://github.com/HianPraxedes)|
| 03/03/2022 | 2.1    | Concertando erros na estrutura do documento | [@HianPraxedes](https://github.com/HianPraxedes)|

## 1. Introdução

Esse documento tem como principal objetivo apresentar as ideias gerais do desenvolvimento do Plugin SIGAA PLUS. Além disso, é apresentado os problemas a serem resolvidos durante a produção do plugin.

## 1.1 Escopo:

Este projeto tem como objetivo otimizar o uso do software SIGAA, melhorando a navegação dos novos e antigos aluno que utilizam esse sistema. Mostrando informações do aluno de um modo mais fácil de visualizar, como a quantidade de créditos (obrigatórios, optativos e de módulo livre) que faltam para ele, além de agilizar a análise de matérias equivalentes e disciplinas que faltam na estrutura curricular do seu curso.

Com o uso do SIGAA PLUS, a necessidade de abrir outras abas para conseguir algumas informações na própria plataforma do SIGAA não irá mais existir, pois elas estarão todas na sua frente de forma fácil e eficiente.

## 1.2 Definições, acrônimos e abreviações:

| Abreviação | Significado                                          |
| ---------- | ---------------------------------------------------- |
| _UNB_      | Universidade de Brasília                             |
| _FGA_      | Faculdade UnB Gama                                   |
| _SIGAA_    | Sistema Integrado de Gestão de Atividades Acadêmicas |
| _MDS_      | Métodos de Desenvolvimento de Software               |
| _RF_      | Requisitos funcionais               |
| _RNF_      | Requisitos não funcionais               |

## 1.3 Referências:

> Documento de Visão: IBM. Disponível em: https://www.ibm.com/docs/pt-br/elm/6.0.5?topic=requirements-vision-document. Acesso em 31/01/2022;
> 
> Documento de Visão: Acacia. Disponível em: https://github.com/fga-eps-mds/2019.2-Acacia. Acesso em 24/02/2022;

## 1.4 Visão Geral:

Neste documento é apresentado o software desenvolvido de forma detalhada, para que se tenha uma melhor visão de todo o seu processo, além de apresentar os problemas a serem solucionados durante sua produção, apresentação dos stakeholders, referências, descrição das ferramentas utilizadas na aplicação, entre outros.

---

# 2. Posicionamento

## 2.1 Oportunidade de Negócios

Com o aumento do uso do SIGAA surgiu uma necessidade criar de alguma ferramenta que auxiliasse no uso da plataforma, assim otimizando o tempo dos usuários. Tendo em vista isso, buscamos suprir essa demanda com o SIGAA PLUS. Assim conseguindo cada vez mais uma praticidade para a vida dos estudantes que utilizam essa plataforma e tirando a necessidade de o usuário ter que abrir outras abas no navegador para ver alguma informações na própria plataforma do SIGAA.

## 2.2 Descrição do Problema

O atual sistema do SIGAA, exige que o usuário tenha que ir atrás de informações na plataforma que muitas vezes ele nem sabe onde estão ou não possui uma praticidade em conseguir elas. Isso vem se tornando mais presente com a chegada de novos alunos. Onde eles caem na plataforma sem saber como utilizar ela direito e isso gera um grande desconforto para os usuários. 

## 2.3 Posição do Produto

Com toda a necessidade de uma maneira de conseguir as informações no SIGAA, o posso produto entra para suprir essa necessidade, além de agilizar alguma ações que precisariam de algum tempo abrindo novas páginas no navegador, como buscar as matérias equivalentes do curso do usuário no momento de fazer sua grade horária das matérias.

---

# 3. Usuários e Interessados

## 3.1 Resumo dos Envolvidos

| Nome            | Descrição                               | Responsabilidade                                                |
| --------------- | --------------------------------------- | --------------------------------------------------------------- |
| Avaliador(es)   | Professor(es) da disciplina de MDS      | Avaliar a qualidade do projeto desenvolvido pelos alunos de MDS |
| Desenvolvedores | Estudantes da Disciplina MDS da UnB FGA | Criar e manter documentos; Desenvolver e testar o software      |

## 3.2 Resumo da Parte Interessada

| Nome                      | Representa                                     | Responsabilidade                                          |
| ------------------------- | ---------------------------------------------- | --------------------------------------------------------- |
| Usuário do produto        | Alunos da UNB                                  | Utilizar as funcionalidades do plugin                     |
| Equipe de Desenvolvimento | Equipe formada por alunos da disciplina de MDS | Documentar, desenvolver, testar e implementar o software  |
| Professora                | Professora responsável pela disciplina de MDS  | Orientar e avaliar os trabalhos realizados pelas equipes. |

## 3.3 Resumo do Usuário

| Nome             | Descrição                                                                 | Parte Interessada  |
| ---------------- | ------------------------------------------------------------------------- | ------------------ |
| Discentes da UNB | Este usuário será quem utilizará as funcionalidades disponíveis no plugin | Usuário do produto |

## 3.4 Ambiente do Usuário

Os usuários poderão utilizar a aplicação por meio de navegadores desktop que possuam integração com a Chrome Web Store.

## 3.5 Principais Necessidades da Parte Interessada ou do Usuário

| Necessidade                                                                                                                   | Prioridade | Interesses | Solução atual                                                                                                          | Solução proposta                                         |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Visualizar matérias equivalentes                                                                                              | 1.0        | Aluno      | Procurar equivalências de matéria por matéria no SIGAA                                                                 | Equivalências de todas as matérias listadas para o aluno |
| Visualizar disciplinas que faltam na estrutura curricular                                                                     | 1.0        | Aluno      | Download do histórico do aluno para a visualização das matérias que faltam ou buscar pela estrutura do curso           | Exibir as matérias restantes sem trabalho do aluno       |
| Visualizar gráficos com a quantidade de créditos obrigatórios, optativos e módulo livre que falta para o término da graduação | 1.0        | Aluno      | Download do histórico, separação e soma da quantidade de matérias e créditos obrigatórios, optativos e de módulo livre | gráfico mostrando os créditos de cada modalidade         |

## 3.6 Alternativas e Concorrência

A alternativa atual é fazer todo o processo manualmente, navegando em vários locais defendentes dentro do SIGAA, com buscas cansativas matéria por matéria e cálculos, dado que hoje não existem ferramentas que facilitem o processo.

# 4. Visão geral do Produto

## 4.1 Perspectiva do produto

O Projeto visa ser um facilitador do uso da plataforma SIGAA, agilizando e diminuindo alguns processos que seriam necessários para conseguir algumas informações na plataforma. Assim utilizamos os dados da própria plataforma, mas esses dados serão mostrados de uma maneira mais fácil de o usuário visualizar e assim conseguir fazer suas atividades de forma mais rápida. Logo esse usuário ficaria menos tempo procurando as informações que precisa, além de passar menos tempo usando a plataforma, assim diminuindo a chance de ter uma queda no rendimento da própria plataforma do SIGAA.

## 4.2 Resumo das capacidades

| Benefício para o Usuário         | Recursos de suporte |
| ---------- | ---------------------------------------------------- |
| Facilidade no uso da plataforma SIGAA | O Plugin disponibiliza uma interface intuitiva e funcional para agilizar o uso da plataforma. |
| Visualizar informações recentes ao usuário e ao seu curso | O Plugin disponibiliza uma interface com a função que irá mostrar todas a matérias equivalentes do usuário, disciplinas que faltam na estrutura curricular e mostrar gráficos de créditos (obrigatórios, optativos e módulo livre) que faltam para o término da graduação. Tudo isso pode ser realizado com as informações retiradas da própria plataforma. |

## 4.3 Funções do Produto

O projeto está encarregado de levar ao usuário de forma prática e intuitiva as informações que não são de fácil acesso no SIGAA. Assim agregando mais funções a plataforma.

# 5. Recursos do Produto

Os usuários interessados no projeto terão acesso aos seguintes recursos:

* Visualizar matérias equivalentes
* Visualizar disciplinas que faltam na sua estrutura curricular
* Visualizar gráficos com a quantidade de créditos (obrigatórios, optativos e módulo livre) que faltam para o término da graduação.

# 6. Restrições

Listagem de restrições externas e outras dependências:

* Ter um computador;
* Ter conexão à internet;
* Ser cadastrado no SIGAA;
* Usar um navegado que seja integrado a Chrome Web Store;

## 6.1 Restrições de Implementação

O sistema será implementado utilizando algumas tecnologias, sendo elas Docker, Javascript, NodeJs, Pupperteer para o back-end e o Vuejs, Vue-chartsJs, HTML e Css para o front-end.

## 6.2 Restrições externas

Dentre as restrições externas as que mais irão influenciar no decorrer do projeto são a falta de conhecimento das tecnologias que serão usadas e possíveis imprevistos que possam causar transtornos entre os integrantes da equipe.

## 6.3 Restrições de Design

Toda a interação com o software deve ocorrer de forma natural, de modo que o usuário não fique com dúvidas sobre como realizar determinada tarefa. Os recursos cujos usuários tem acesso devem ser de fácil entendimento, de modo que o usuário não desista durante alguma ação.

## 6.4 Restrições de Confiabilidade

Visando uma maior manutenibilidade do projeto pela comunidade, os desenvolvedores tem o comprometimento de manter uma cobertura de testes mínima de 90%.

# 7. Requisitos do Produto

## 7.1 Introdução

Tendo em vista a necessidade da utilização do processo chamado priorização de requisitos, o qual ajuda a manter uma entrega rápida do máximo de funcionalidades possíveis dentro das retrisções do projeto. Por conta disso, foi escolhido a técnica MoSCoW. Suas letras maiúsculas indicam o esquema de priorização que deve ser seguido.

## 7.2 Metodologia

* **Must**: Significa que o requisito deve ser importante para a solução ser considerada um sucesso.
* **Should**: Significa que o requisito é importante e deve ser implementado, mas sua implementação ou não, não irá interferir diretamente no sucesso da solução.
* **Could**: Significa que o requisito indicado não precisa ser necessáriamente implementado, apenas se tiver tem e recursos.
* **Won't**: Significa que o requisito indicado não precisa ser implementado naquele momento, podendo ser implementado nos futuros lançamentos.

## 8. Resultado

## 8.1 Requisitos funcionais

| Número |                                 Requisito                       | MoSCoS | 
| ------ | --------------------------------------------------------------- | ------ |
| RF1    | O usuário deve visualizar as matérias equivalentes do seu curso | Must   |
| RF2    | O usuário deve visualizar as disciplinas que faltam na estrutura curricular | Must   |
| RF3    | O usuário deve visualizar um grafico com a quantidade de créditos obrigatórios para o término da graduação | Must   |
| RF4    | O usuário deve visualizar um grafico com a quantidade de créditos optativos para o término da graduação  | Must   |
| RF5    | O usuário deve visualizar um grafico com a quantidade de créditos de módulo livre para o término da graduação  | Must   |

## 8.2 Requisitos não funcionais

| Número |                                 Requisito                       | MoSCoS | 
| ------ | --------------------------------------------------------------- | ------ |
| RNF1    | O sistema deve funcionar na plataforma do SIGAA | Should |
| RNF2    | O sistema deve ser responsivo | Should  |
| RNF3    | O sistema deve funcionar de forma individual para cada usuário | Should |
| RNF4    | O usuário deve poder baixar o sistema pela loja de extensão do navegador  | Could  |


