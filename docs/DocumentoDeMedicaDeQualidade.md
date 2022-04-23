# Medição da Qualidade do Software

## Histórico de revisão

| Data   | Versão | Modificação  | Autor  |
| :- | :- | :- | :- |
| 20/04/2022 | 0.1 | Criação da estrutura do documento |  Laís |
|23/04/2022|0.2|Adição das informações de medição |Laís|


 ## Objetivo
Esse documento tem como objetivo medir a qualidade do nosso projeto apresentando indicativos de boas práticas utilizadas, os mals cheiros produzidos ao longo do processo de codificação,o Overal Rating do repositório e etc. A medição foi feita com o auxílio das plataformas *Embold* e *Code Climate*.

 ## Indicativos coletados no repositório

* ### *Overal Rating*
Por *Overal Rating* entende-se como um indicador de quão bom o código é. É uma representação numérica da qualidade do software. A classificação é calculada em todos os níveis do software: para uma função (ou método), um componente (ou classe) , um pacote e para o software em geral. 
O *Overal Rating* do projeto tem o valor de **2.4** em uma escala de -5 à 5, como demonstrado a seguir:


![overadeRating](https://user-images.githubusercontent.com/38669960/164943240-c109d0c6-6c2e-47f2-8482-5dd7ca20cbc3.png)


* ### Vunerabilidades
Não foram encontradas vulnerabilidades no software:

![vulnerabilidade](https://user-images.githubusercontent.com/38669960/164943675-a81636cc-0a33-4e9a-9a1a-4a768813890e.png)

* ### *Antipadrões
Não foram encontrados antipadrões no software:

![padrões](https://user-images.githubusercontent.com/38669960/164943678-7b1113b2-3163-4c87-8762-e1d2970d1f6e.png)

* ### *Code Issues*
As *Code Issues*, ou problemas de código são detectados verificando o código em relação às regras predefinidas. Cada problema de código tem uma gravidade, sendo elas crítica, alta, média ou baixa. Problemas críticos têm um impacto maior na classificação do que os problemas de baixa gravidade.
Ao analisar as  *code issues* , foram contabilizadas **108**  como *Low issues* e **29** como *Medium Issues*. Isso quer dizer que no desenrolar do projeto, os problemas do código fora de complexidade baixa, com alguns outros problemas de complexidade média:
![codeissuesTotal](https://user-images.githubusercontent.com/38669960/164943685-f2dccd1b-a773-4d8d-9083-7527cadf60f2.png)

![mediumIssues](https://user-images.githubusercontent.com/38669960/164943691-79d071a5-5b2d-460b-91d1-3b26b321f39a.png)

![lowIssues](https://user-images.githubusercontent.com/38669960/164943733-9391f198-11dd-41f6-9d7f-fcc4aef1f44d.png)


* ### *Executable LOC (Lines of code)*
Linhas de códigos executáveis é o número de linhas de código executáveis em uma classe (componente) ou uma função. As linhas de comentário e as linhas vazias não são contadas. No projeto foram **60.8K** de linhas execultáveis: 

![linhasExec](https://user-images.githubusercontent.com/38669960/164943663-63ad560c-e10e-4041-b992-7097442f071f.png)


* ### Blocos duplicados
Número de blocos duplicados. No total foram **121** blocos duplicados, sendo portanto **2** blocos duplicados por 1.000 linhas de código execultáveis.


![blocos](https://user-images.githubusercontent.com/38669960/164943789-47801d7e-f8c7-4564-894d-bebc9cdf4a99.png)


* ### *KPI Summary*

![kpi](https://user-images.githubusercontent.com/38669960/164943802-c78f2a8d-fb44-41f3-bd87-ba261352b094.png)


*KPI*s (*Keys Performance Indicators*) são os principais indicadores para mensurar a qualidade do software e avaliar suas características, fornecendo informações que servirão como base para tomadas de decisão. No caso do nosso software, os indicadors adotados foram:  Funcionalidade, Manutenibilidade, Robustez, Eficiência, Usabilidade, Confiabilidade, Integridade Conceitual, Portabilidade, Analisabilidade e Segurança. Segue as respectivas porcentagens do projeto:

*  Funcionalidade 

![funcionalidade](https://user-images.githubusercontent.com/38669960/164943649-4da7dc51-2811-4a2b-b579-da0575de20bc.png)

*"Sua pontuação de **99** de Funcionalidade é muito boa.Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a funcionalidade .Existem 4 problemas que afetam este KPI."*

*  Manutenibilidade

![maintainability](https://user-images.githubusercontent.com/38669960/164943261-99d25168-a5e1-4069-becf-3f2d3ab01807.png)

*"Sua pontuação de **95** de Manutenção é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a manutenção. Existem 70 problemas que afetam este KPI. "*

*  Robustez

![robustez](https://user-images.githubusercontent.com/38669960/164943250-888f91c6-f6aa-403f-9682-09a5f5396c0b.png)

*"Sua pontuação de **99** de Robustez é muito boa.Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a robustez. Existem 4 problemas que afetam este KPI."*

*  Eficiência


*"Sua pontuação de **100** de Eficiência é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a eficiência."*


*  Usabilidade

![usabilidade](https://user-images.githubusercontent.com/38669960/164943272-c55daedf-d394-49aa-a2d0-41da43716d79.png)

*"Sua pontuação de **96** de Usabilidade é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a Usabilidade. Existem 63 problemas que afetam este KPI."*


*  Confiabilidade

![confiabilidade](https://user-images.githubusercontent.com/38669960/164943280-a1099977-f131-40f1-8731-45a0be4f35ab.png)

*"Sua pontuação de **100** de Confiabilidade é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a confiabilidade."*

*  Integridade Conceitual

 ![integridade conceitual](https://user-images.githubusercontent.com/38669960/164943285-1bed4ca1-1c6b-4b49-a204-e3071436765a.png)

 
*"Sua pontuação de **100** de Integridade Conceitual é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a integridade conceitual."*

*  Portabilidade

![portabilidade](https://user-images.githubusercontent.com/38669960/164943619-af40fb3e-a1a6-43d2-b758-5bd3db7eea1e.png)


*"Sua pontuação de **100** de Portabilidade é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a portabilidade."*

*  Analisabilidade

![analyzability](https://user-images.githubusercontent.com/38669960/164943631-bbf635b6-4a61-425c-8cca-40be60c350e1.png)


*"Sua pontuação de **100** de analisabilidade é muito boa.Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a capacidade de análise."*

*  Segurança

![segurança](https://user-images.githubusercontent.com/38669960/164943638-8a6ff3b2-0ed6-4e5a-9d25-9f65aac78161.png)


*"Sua pontuação de 100 de Segurança é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a segurança."*

* ### *Code Smells*
Termo criado por Kent Beck quando ele ajudava Martin Fowler a escrever seu best seller "Refactoring, Improving the Design of Existing Code". O termo smell se refere a possíveis problemas no código de um programa que podem ser percebidos com facilidade. No código do pligin existem **0** *code smells*.


![codeSmells](https://user-images.githubusercontent.com/38669960/164943302-6c6b99ba-a6b9-45f1-87f8-c4e5fbb3a789.png)


### Bibliografia
https://www.devmedia.com.br/code-smells-conheca-antes-que-seja-tarde/39636

https://docs.embold.io/embold-score/#embold-rating-system
