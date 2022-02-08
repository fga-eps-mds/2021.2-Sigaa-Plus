# Documento de Arquitetura

## Histórico de Revisão

| Data       | Versão | Descrição                                                                                 | Autor                                                                                     |
| ---------- | ------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 01/02/2022 | 0.1    | início da criação dos tópicos da introdução                                               | [@Madu01](https://github.com/Madu01) e [@vitormanoel17](https://github.com/vitormanoel17) |
| 03/02/2022 | 0.2    | montagem da estrutura do documento e das tecnologias do tópico Representação arquitetural | [@Madu01](https://github.com/Madu01) e [@vitormanoel17](https://github.com/vitormanoel17) |
| 06/02/2022 | 0.3    | criação dos conteúdos dos subtópicos 2.1 e 2.2                                            | [@Madu01](https://github.com/Madu01)                                                      |
|            |        |                                                                                           |                                                                                           |

## 1. Introdução

### 1.1 Escopo

### 1.2 Objetivo

Este documento apresenta de forma ampla a arquitetura do software do projeto, como as tecnologias a serem utilizadas e os diagramas da visão geral da arquitetura. As informações apresentadas neste documento será de modo que guie os desenvolvedores e envolvidos a aplicar tais instruções no processo de desenvolvimento do projeto.

### 1.3 Abreviações e Termos

| Sigla/Termo | Conceito |
| ----------- | -------- |
|             |          |

## 2. Representação Arquitetural

### 2.1 HTML

Em 1991 iniciou o HTML, sua abreviação é HyperText Markup Language, traduzindo para o português significa "Linguagem de Marcação de Hipertexto" e a sua versão mais recente é o HTML5, trazendo utilidades e meios para um melhor desenvolvimento web. A principal função do HTML é demarcar a estrutura de uma página da web. As estruturas demarcadas são os elementos que também são chamados de tags HTML. Na página esses elementos são textos (títulos, parágrafos e subtítulos), botões, imagens, áudios, etc..., ou seja, são hipertextos que juntos compõem a estrutura básica de uma página da web.

A estrutura das tags são iniciadas com o sinal “<”, logo depois vem o nome do elemento e terminam com o sinal “>” ` (ex.: <h1>)`. Há dois tipos de tags, as que precisam ser fechadas e as que já se fecham sozinhas. O fechamento definitivo de uma tag ocorre pela barra “/” `(ex.: <h1> Bom dia! </h1>)` e as que se fecham sozinhas não precisam da barra `(ex.: <img src="capa.jpg">)`.

Para que o navegador consiga interpretar um documento em HTML, o arquivo deverá ter a extensão .html `(ex.: index.html)` e só assim o documento poderá ser lido e exposto por qualquer navegador web.

Essa tecnologia foi escolhida para o desenvolvimento do software do projeto por ser a estrutura mais básica na parte visual de um plugin numa página da web, nela vamos dá o início na aparência do plugin colocando a princípio os textos (títulos e subtítulos) e imagens.

### 2.2 CSS

O CSS foi apresentado em 1994, sua abreviação é Cascading Style Sheets que em português significa “Folhas de Estilo em Cascatas”, ele melhora a aparência das páginas da internet estilizando os elementos que compõem as linguagens de marcação, como XML, HTML e XHTML. A princípio o CSS foi feito para separar o conteúdo e formato de um documento da sua aparência, sua última versão apresentada é o CSS3.

A estrutura básica do CSS é formada por seletor (escolhe o elemento a ser estilizado), declaração (especifica quais das propriedades do elemento vão ser estilizados), propriedades (o atributo do elemento ao qual será aplicada a regra) e o valor da propriedade (escolhe uma dentre muitas características possíveis para uma determinada propriedade, como a cor, o fundo a formatação da letra, etc.). A imagem abaixo ilustra melhor a estrutura:

![img_exemplo](https://user-images.githubusercontent.com/64814266/152714314-9cae6e74-588d-438c-99e6-8f6cefbfde05.png)

A ação do CSS é feita por um documento cujo a extensão deverá ser .css `(ex.: estilo.css)` para que o arquivo possa funcionar. O arquivo em CSS é separado do arquivo em linguagem de marcação e ocorre um processo de linkar para que o documento em CSS seja ligado ao da linguagem de marcação, assim possibilitando a estilização das páginas com linguagens como HTML, XML, etc.

Utilizaremos esta tecnologia no desenvolvimento do nosso projeto por permitir uma flexibilização maior e controle na estilização da linguagem de marcação HTML, além disso, o CSS reduz a repetição do conteúdo estrutural de uma página. Desse modo HTML seria a base que estrutura o conteúdo e o CSS seria as características visuais do conteúdo, de modo simbólico o HTML seria as bordas de uma estrutura e o CSS preencheria o meio onde não há uma estilização.

### 2.3 JavaScript

### 2.4 Web Scraper

## 3. Metas e Restrições arquiteturais

## 4. Visão de Casos de Uso

## 5. Visão Lógica

### 5.1 Visão Geral

### 5.2 Diagrama de Pacotes

## 6. Visão de Implementação

## 7. Referências

> Documento de Arquitetura : Acácia. Disponível em: https://fga-eps-mds.github.io/2019.2-Acacia/#/architecture_document?id=documento-de-arquitetura. Acesso em 03/02/2022;
