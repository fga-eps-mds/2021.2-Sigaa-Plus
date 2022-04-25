| Data   | Versão | Modificação  | Autor  |
| :- | :- | :- | :- |
| 25/09/2022 | 0.1 | Criação da versão inicial do documento | Laís|
| 25/09/2022 | 0.2 | Adição do campo de resultados | Laís|




## Introdução
O Teste de Software é uma maneira de avaliar a qualidade da aplicação e reduzir o risco de falha em operação [1](#referencia1). Portantanto, testar não consiste apenas em executar testes (execultar o software e verificar os resultados). Executar testes é uma das etapas. O processo de testagem envolve planejamento, análise, modelagem e implementação dos testes, relatórios de progresso, resultado e avaliação da qualidade, também são parte de um processo de teste [1](#referencia1).

## Metodologia
Durante o processo de desenvolvimento do projeto, a equipe se propos a avaliar as ferramentas a serem utilizadas no processo de testagem. Para isso foram feito estudos sobre a viabilidade das ferramentas utilizadas através de pesquisas de mercado. Por ser um Plugin, ou seja, uma aplicação web (uma solução que é executada diretamente no navegador), as ferramentas escolhidas deviam ser baseadas exclusivamente em Javascript e nos frameworks utilizados no desenvolvimento do projeto, sendo eles: Node.js,Pupperteer e Express para o Back-end e Javascript, CSS,HTML e Vue.js para o Front-End.
Para a escolha foram adotados critérios como: 
*Facilidade de instalação da ferramenta
*Facilidade de compreensão da ferramenta
*Familiaridade da equipe com a ferramenta

Vale destacar que as ferramentas escolhidas podem ser utilizadas no desenvolvimento das duas frentes (Back-end e Front-end), pois as mesmas são baseadas em Javascript.


### Processo de escolha
Como já destacado, o código  das duas frentes estará em Javascript, logo as ferramentas devem ser compatíveis com a linguagem. Para a realização de testes end-to-end foram selecionadas duas ferramentas : Nightwacht.js e Chromeless.js.
Além disso, na construção de cada funcionalidade foram realizados testes unitários - teste da menor parte testável de um programa, possibilitando que a aplicação continue funcionando mesmo após alguma alteração na base de seu código[2](#referencia2). 


#### Guia de estilo
Como a camada Front-end da aplicação foi feita utilizando o  Vue.js, utilizou-se o [Guia de estilo](https://v2.vuejs.org/v2/style-guide/?redirect=true) próprio do framework.Este deverá se seguido com o propósito de se evitar erros. Para a camada Back-end foi adotado o [guia de estilo](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics) disponibilizado pela [Mdm web docs](https://developer.mozilla.org/pt-BR/).




## Resultados
Levando em conta a viabilidade de instalação, compreensão do funcionamento e familiaridade com a maneira de funcionamento da ferramenta (a mesma possuir funicionamento similar ao Pupperteer). A API do Chromeless é muito semelhante ao Nightmare.js. A grande diferença é que o Chromelles é baseado no modo headless do Chrome e é executado em uma função serveless no AWS Lambda[3](#referencia3). A vantagem disso é que é possível executar centenas de navegadores em paralelo, sem precisar pensar em raralelização, acelerando por exemplo a execução de testes de integração.







## Referências
<a id="referencia1"></a>
[O que é um teste de software?](https://cwi.com.br/blog/o-que-e-teste-de-software-por-que-e-necessario/)

<a id="referencia2"></a>
[Testes Unitários](https://dayvsonlima.medium.com/entenda-de-uma-vez-por-todas-o-que-s%C3%A3o-testes-unit%C3%A1rios-para-que-servem-e-como-faz%C3%AA-los-2a6f645bab3)

<a id="referencia2"></a>
[Chromeless](https://github.com/prisma-archive/chromeless)