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


* ### Vunerabilidades
Não foram encontradas vulnerabilidades no software:

* ### *Antipadrões
Não foram encontrados antipadrões no software:

* ### *Code Issues*
As *Code Issues*, ou problemas de código são detectados verificando o código em relação às regras predefinidas. Cada problema de código tem uma gravidade, sendo elas crítica, alta, média ou baixa. Problemas críticos têm um impacto maior na classificação do que os problemas de baixa gravidade.
Ao analisar as  *code issues* , foram contabilizadas **108**  como *Low issues* e **29** como *Medium Issues*. Isso quer dizer que no desenrolar do projeto, os problemas do código fora de complexidade baixa, com alguns outros problemas de complexidade média:

* ### *Executable LOC (Lines of code)*
Linhas de códigos executáveis é o número de linhas de código executáveis em uma classe (componente) ou uma função. As linhas de comentário e as linhas vazias não são contadas. No projeto foram **60.8K** de linhas execultáveis: 


* ### Blocos duplicados
Número de blocos duplicados. No total foram **121** blocos duplicados, sendo portanto **2** blocos duplicados por 1.000 linhas de código execultáveis.



* ### *KPI Summary*
*KPI*s (*Keys Performance Indicators*) são os principais indicadores para mensurar a qualidade do software e avaliar suas características, fornecendo informações que servirão como base para tomadas de decisão. No caso do nosso software, os indicadors adotados foram:  Funcionalidade, Manutenibilidade, Robustez, Eficiência, Usabilidade, Confiabilidade, Integridade Conceitual, Portabilidade, Analisabilidade e Segurança. Segue as respectivas porcentagens do projeto:

*  Funcionalidade 

*"Sua pontuação de **99** de Funcionalidade é muito boa.Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a funcionalidade .Existem 4 problemas que afetam este KPI."*

*  Manutenibilidade

*"Sua pontuação de **95** de Manutenção é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a manutenção. Existem 70 problemas que afetam este KPI. "*

*  Robustez

*"Sua pontuação de **99** de Robustez é muito boa.Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a robustez. Existem 4 problemas que afetam este KPI."*

*  Eficiência

*"Sua pontuação de **100** de Eficiência é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a eficiência."*


*  Usabilidade

*"Sua pontuação de **96** de Usabilidade é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a Usabilidade. Existem 63 problemas que afetam este KPI."*


*  Confiabilidade

*"Sua pontuação de **100** de Confiabilidade é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a confiabilidade."*

*  Integridade Conceitual
  
*"Sua pontuação de **100** de Integridade Conceitual é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a integridade conceitual."*

*  Portabilidade

*"Sua pontuação de **100** de Portabilidade é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a portabilidade."*

*  Analisabilidade

*"Sua pontuação de **100** de analisabilidade é muito boa.Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a capacidade de análise."*

*  Segurança
*"Sua pontuação de 100 de Segurança é muito boa. Muitos antipadrões, problemas de código, vulnerabilidades e duplicação podem afetar a segurança."*

* ### *Code Smells*
Termo criado por Kent Beck quando ele ajudava Martin Fowler a escrever seu best seller "Refactoring, Improving the Design of Existing Code". O termo smell se refere a possíveis problemas no código de um programa que podem ser percebidos com facilidade. No código do pligin existem **0** *code smells*.




### Bibliografia
https://www.devmedia.com.br/code-smells-conheca-antes-que-seja-tarde/39636

https://docs.embold.io/embold-score/#embold-rating-system
