# Documento de Visão

## Histórico de Revisão

| Data       | Versão | Descrição             | Autor(es)      |
| ---------- | ------ | --------------------- | -------------- |
| 31/01/2022 | 1.0    | Abertura do Documento | Bruno Oliveira |
| 02/02/2022 | 1.1    | Adição do escopo e de mais algumas informações do projeto | Beatriz Santos, Hian Praxedes e Maria Eduarda Marques |

## 1. Introdução

Esse documento tem como principal objetivo apresentar as ideias gerais do desenvolvimento do Plugin Sigaa Aluno. Além disso, é apresentado os problemas a serem resolvidos durante a produção do plugin.

## 1.1 Escopo:

Este projeto tem o objetivo otimizar o software SIGAA, melhorando a navegação do aluno no site, além de acrescentar novas opções para o software.

## 1.2 Definições, acrônimos e abreviações:

| Abreviação | Significado                                          |
| ---------- | ---------------------------------------------------- |
| _UNB_      | Universidade de Brasília                             |
| _FGA_      | Faculdade UnB Gama                                   |
| _SIGAA_    | Sistema Integrado de Gestão de Atividades Acadêmicas |
| _MDS_      | Métodos de Desenvolvimento de Software               |


## 1.3 Referências:

> Documento de Visão: IBM. Disponível em: https://www.ibm.com/docs/pt-br/elm/6.0.5?topic=requirements-vision-document. Acesso em 31/01/2022;

## 1.4 Visão Geral:

Neste documento é apresentado o software desenvolvido de forma detalhada, para que se tenha uma melhor visão de todo o seu processo, além de apresentar os problemas a serem solucionados durante sua produção, apresentação dos stakeholders, referências, descrição das ferramentas utilizadas na aplicação, entre outros.

---

# 2. Posicionamento

## 2.1 Oportunidade de Negócios

Com o aumento do uso do SIGAA sugiu uma necessidade criar de alguma ferramenta que auxiliasse no uso da plataforma, assim otimizando o tempo dos usuarios. Tendo em vista isso, buscamos suprir essa demanda com o (Nome do produto). Assim conseguindo cada vez mais uma praticidade para a vida do estudantes que ultilizam essa plataforma.


## 2.2 Descrição do Problema

O atual sistema do SIGAA, durante a solicitação de matrícula não permite a visualização das matérias que o aluno já cursou nem as obrigatórias ou a quantidade de créditos que ainda faltam para a finalização do seu curso, nem as matérias que equivalem umas as outras, dificultando assim a visualização clara do aluno.

## 2.3 Posição do Produto

Para o aluno faz a matrícula. O (NossoProdutoSemNome) é um plugin que auxilia o aluno a visualizar informações no SIGAA. De outro modo ele teria que fazer as equivalências de materias e análise da porcentagem restante para completar o curso manualmente, nosso produto automatiza essa ação.

---

# 3. Usuários e Interessados

## 3.1 Demográficos de Mercado

| Nome | Descrição | Responsabilidade |
| - | - | - |
| Avaliador(es) | Professor(es) da disciplina de MDS | Avaliar a qualidade do projeto desenvolvido pelos alunos de MDS |
| Desenvolvedores | Estudantes da Disciplina MDS da UnB FGA | Criar e manter documentos; Desenvolver e testar o software |

## 3.2 Resumo da Parte Interessada

| Nome      | Representa | Responsabilidade |
| ----------- | ---------- | ------------------ |
| Usuário do produto | Alunos da UNB | Utilizar as funcionalidades do plugin |
| Equipe de Desenvolvimento |Equipe formada por alunos da disciplina de MDS| Documentar, desenvolver, testar e implementar o software |
| Professora | Professora responsável pela disciplina de MDS | Orientar e avaliar os trabalhos realizados pelas equipes. |

## 3.3 Resumo do Usuário

| Nome      | Descrição | Parte Interessada |
| ----------- | ---------- | ------------------ |
| Discentes da UNB | Este usuário será quem utilizará as funcionalidades disponíveis no plugin | Usuário do produto |

## 3.4 Ambiente do Usuário

## 3.5 Perfis das Partes Interessadas

## 3.6 Perfis do Usuário

## 3.7 Principais Necessidades da Parte Interessada ou do Usuário

| Necessidade| Prioridade | Interesses      | Solução atual      |   Solução proposta |
| ---------- | ------ | --------------------- | -------------- | -------------- |
| Visualizar matérias equivalentes | 1.0   | Aluno | Procurar equivalências de matéria por matéria no SIGAA | Equivalências de todas as matérias listadas para o aluno |
| Visualizar disciplinas que faltam na estrutura curricular | 1.0    | Aluno  | Download do histórico do aluno para a visualização das matérias que faltam ou buscar pela estrutura do curso |   Exibir as matérias restantes sem trabalho do aluno |
| Visualizar graficos com a quantidade de créditos obrigatórios, optativos e módulo livre que falta para o término da graduação | 1.0    | Aluno  | Download do histórico, separação e soma da quantidade de matérias e créditos obrigatórios, optativos e de módulo livre | gráfico mostrando os créditos de cada modalidade |

## 3.8 Alternativas e Concorrência

A alternativa atual é fazer todo o processo manualmente, avegando em vários locais difententes dentro do SIGAA, com buscas cansativas matéria por matéria e cálculos, dado que hoje não existem ferramentas que facilitem o processo.

