# Post Mortem

## Histórico de revisão

| Data       | Versão | Modificação                                                 | Autor                                                  |
| :--------- | :----- | :---------------------------------------------------------- | :----------------------------------------------------- |
| 20/04/2022 | 0.1    | Criação da estrutura do documento                           | [@laisramos123](https://github.com/laisramos123)       |
| 22/04/2022 | 0.2    | Adição do campo de recomendações para os próximos semestres | [@laisramos123](https://github.com/laisramos123)       |
| 24/04/2022 | 0.3    | Adição do relato dos membros e das suas respectivas frases  | [@laisramos123](https://github.com/laisramos123)       |
| 24/04/2022 | 0.4    | Adição do relato da maria B.                                | [@Madu01](https://github.com/Madu01)                   |
| 24/04/2022 | 0.5    | Adição do relato da disciplina                                | [@GabriellyAssuncao](https://github.com/GabriellyAssuncao)                   |
| 25/04/2022 | 0.6    | Adição do relato da maria Marques                           | [@EduardaSMarques](https://github.com/EduardaSMarques) |
| 25/04/2022 | 0.7    | Adição do relato do Bruno Oliveira                          | [@eng-Bruno](https://github.com/eng-Bruno)             |

## Introdução

Este documento tem como objetivo expressar a experiência do grupo ao decorrer do desenvolvimento do projeto.

## Definição de Escopo

O escopo foi definido baseado na problemática que a professora apresentou: Plugin Chrome para gerar gráficos e informações sobre os dados do aluno que utiliza a plataforma SIGAA da Universidadde de Brasília. Escolhido o tema, os dois times se reuniram para escolher as funicionalidades do plugin e fizemos um brainstorm dos principais problemas que enfrentamos como estudantes durante o uso da plataforma. Portanto o escopo foi definido a partir da criação de uma solução que ajudasse o estudante a visualizar a porcentagem da estrutura curricular já cursada e a procentagem que ainda falta cursar, possibilitando assim uma vizualização dinâmica do fluxo de matérias.

## Metologia e Processo

As metodologias ágeis adotadas foram o Scrum e o kanban, sendo aplicados durante o desenvolvimento do projeto através da utilização de métricas, dailys meetings, plannnig e review das sprints.

## Tecnologias utilizadas

Para a construção do Back-End do software foi utilizado o Node.js e o Express.js, framework do Node.js que permite que o mesmo seja utilizado na construção da aplicação web e API. Para a captura de dados das matérias presente nos componentes curriculares dos cursos da Unb foi utilizado o Pupperteer, framework Node.js.
Na parte de Front-End, além da utilização de Javascript, CSS e HTML, foi utilizado o Vue.js pois este favorece o isolamento e manuntenção das funcionalidades. Para isolamento de ambiente utilizamos o Docker.
Quanto à comunicação foi utilizado o ZenHub, Discord e Telegram. E por último, para controle de versionamento foij utilizado o Git e o GitHub.

## Arquitetura

No início do projeto os dois times estavam trabalhando juntos para desenvolver as funcionalidades previstas, mas após a Release 01 foi decidido que essa estratégia não era produtiva nem viável para as entregas, portanto dividimos os dois grupos entre Back-End e Front-End, sendo o Time A responsável pelo Back-End e o Time B responsável pelo Front-End.

## Capacitação do Time

Quanto à capacitação, foram realizados Dojos das tecnologias utilizadas, de Git e GitHub e a participação do Dojo de Docker disponibilizado pela professora. Além disso foram realizados parementos para firmar os conhecimentos adquiridos.

## Entrega da R1

A entrega da R1 foi de grande importância para a equipe, pois foi possível perceber o que estava dando certo e principalmente os pontos onde as equipes estavam errando. Foi exposto acerca da falta de uso das métricas, onde fio possível notar que não era possível saber se os integrantes estavam trabalhando ou se reunindo continuamente, causando grande falta de comunicação entre os membros. Outro ponto que dificultou o desenrolar do projeto é que inicialmente os dois grupos estavam trabalhando nas tarefas de maneira conjunta, sobrecarregando alguns membros e diminuindo a velocidade nas entregas e o nível de produtividade.

## Entrega da R2

## Recomendações para os próximos semestres

- Usem as métricas desde o início do projeto, elas são bem importantes pro andamento do projeto e pra ver se o time realmente produziu na Sprint
- Evitem de trabalhar com grupos grandes, isso só vai sobrecarregar os membros
- Façam o Daily notes, é importante saber o que os outros membros estão fazendo pra não fazer retrabalho
- Evitem fazer longas reuniões, é extremamente improdutivo, cansativo e oculpa um tempo que poderia estar sendo utilizado no projeto em si

## Sentimentos da Equipe

### Time A

**Gabrielly Assunção - Scrum Master/DevOps**

_"Eu não tenho palavras para descrever tudo que a disciplina me proporcionou. Foram (muitos) momentos de raiva e desespero hahaha, mas também houveram momentos de muita risada e aprendizado. Do início ao fim, a disciplina, foi um desafio muito grande não só pra mim, creio eu, mas para todos do grupo. O fato de trabalharmos com tecnologias e metodologias que alguns de nós nunca haviam tido contato antes foi assustador mas também foi gratificante ver o resultado final. Eu só tenho a agradecer a universidade por ter me proporcionado essa experiência, a professora por toda dedicação e paciência que teve para nos ensinar e aos meus colegas de grupo que me fizeram entender na prática como a união faz a força. Eu, com toda certeza entrei na disciplina como uma programadora e estou saindo uma completamente diferente, mais madura, não somente no sentido profissional, mas no pessoal também. Aos próximos alunos que farão a disciplina, aproveitem, é uma experiência única."_

**Hian Praxedes- Product Owner**

_"Minha experiência nessa disciplina foi interessante eu diria, mesmo com todos os problemas. O pessoal do meu grupo (Grupo A do SIGAA+) são incríveis, sempre ajudando quando necessário e comunicativos na base do possível, aprendemos muito nesse tempo de desenvolvimento. Seja de ir buscar conhecimento de como as ferramentas funcionavam, tentando achar um jeito para solucionar um problema no código ou no próprio SIGAA (que não ajudava muito também, mas tudo bem). Mas no fim foi uma jornada bem agitada por conta do tempo do semestre, mas foi uma boa experiência, consegui senti a empolgação de ver as coisas que eu estava fazendo funcionando, seja uma documentação ou o próprio webScraping no SIGAA."_

**Laís Ramos Barbosa - Scrum Master**

_"Durante muito tempo tive bastante medo da disciplina de MDS , confesso por problemas pessoais e pelo medo fuji bastante dela (pode-se ver isso pelo ano da minha matrícula kkk).Mas esse ano decidi não deixar mais o medo me paralisar e decidir que iria enfrentar de frente, mesmo não tendo o conhecimento técnico elevado. Desde o início da disciplina me apaixonei pelas metodologias ágeis e tive muita afinidade com o papel de Scrum Master por gostar de me comunicar com as pessoas e acabei gostando bastante desse papel que desenvolvi. Durante todo o desenrolar do projeto pareceu que sempre estava um passo atrás dos outros colegas em relação ao conhecimento técnico - e realmente estava kkkkk- mas sempre tentando aprender e dar o meu melhor para conseguir ajudar e contribuir. O time teve muita paciência comigo, e nunca reclamaram de eu não ter dado uma solução efetiva pro desenvolvimento de software. Apesar de alguns problemas de comunicação, me orgulho muito dos dois times e do projeto desenvolvido! "_

**Pedro Abreu - Product Owner**

_""_

**Pedro Henrique Elias Pereira- Arquiteto**

_"Foi minha primeira experiência desenvolvendo um software usando os métodos de mercado, se aproximando da realidade de como é o fluxo de trabalho de um desenvolvedor de software. Eu não não sabia muito o que esperar da disciplina, então quando falou que faríamos um software todo fiquei assustado, não sabia muito do que era para ser feito então aprendi bastante ao longo do percurso, porém falta de experiência no desenvolvimento de aplicações neste estilo dificultou bastante durante as primeiras semanas de projeto, onde fiquei bastante perdido no que fazer, então fique bastante dependentes dos outros integrantes.
  Portanto, apesar de não saber como fazer as coisas no início, eu aprendi bastante ao longo do processo e tenho muita gratidão a minha excelente equipe, e me sinto mais maduro como desenvolvedor. O MDS foi um grande passo para entender como desenvolver software ."_

**Vítor Manoel Aquino- Arquiteto**

_""_

### Time B

**Bruno Oliveira -Scrum Master**

_"A minha experiência com MDS foi muito boa. Apesar de alguns episódio perdidos sem saber como progredir no trabalho, também tive experiências muito boas relacionadas ao trabalho em coletivo. Não foi nada fácil fazer um trabalho em grupo totalmente remoto. Durante o decorrer da disciplina eu aprendi muitas coisas, como tecnologias novas que eu nunca tinha conhecido antes, elaboração de documentos, metodologias agéis, mais experiência com o github.
Enfim, durante toda a disciplina eu tive altos e baixos, semanas em que produzia mais e semanas que produzia menos, algumas vezes por falta de tempo por causa de outras disciplinas, outras vezes por desânimo, mas todo esse processo fez eu aprimorar mais o meu conhecimento em linguagens que eu já gostaria de trabalhar antes, e também tive uma experência de finalmente trabalhar em algum projeto com uma equipe. "_

**Luiz Pettengill - Scrum Master**

_""_

**Beatriz Santos - Product Owner**

_""_

**Maria Eduarda Marques - Product Owner**

_"Eu me surpreendi totalmente com MDS, já tinha ouvido falar da disciplina antes e sabia que ela ia demandar um pouco mais de tempo e esforço, porém, trabalhar com mais de 10 pessoas foi algo que me pegou de surpresa já que foi a primeira vez que eu trabalhei com tantas pessoas ao mesmo tempo e confesso que achei que seria uma bagunça ter que trabalhar com tanta gente, mas não, com as práticas ágeis, as aulas da professora e a organização e dedicação de ambos os times, fizeram com que a matéria fosse menos maçante e mais proveitosa para se fazer, diferente de alguns trabalhos em grupo que tive ao longo dos anos na faculdade.
Com toda certeza se eu pudesse faria esta matéria de novo, só que com mais experiência em programação, pois acredito que só com 4 semestres feitos na faculdade e com as matérias passadas nesses semestres não seja requisitos suficientes para cursar a matéria.
Finalizando então, mesmo sabendo que dediquei o meu melhor, é inevitável não se sentir frustrada, já que poderia ter me saído um pouco melhor no projeto, mas independente de tudo eu não poderia ter aprendido tanta coisa e ter tido uma ótima experiência na matéria se não fosse todo o suporte que a professora e os meus colegas me proporcionaram e eu só tenho que agradecer por isso."_

**Maria Eduarda Barbosa - Arquiteta**

_"Eu gostei da experiência que essa disciplina me trouxe, pois me fez aprender e desenvolver coisas novas, como as tecnologias e os métodos ágeis. No início me senti meio perdida e com medo de não conseguir desenvolver nada na parte do software e de nem progredir, mas com o tempo fui melhorando até quando consegui desenvolver algo mesmo que não fosse muuuito complexo, mas era satisfatório ver funcionando e ensinar pro grupo o que aprendi foi bem legal. Durante o período da disciplina percebi o quão é importante utilizar o Scrum e as outras metodologias ágeis para implementar um software em grupo. No quesito de experiência em grupo foi interessante, gostei bastante da forma em que os times A e B se relacionaram, teve solidariedade, as pessoas ajudavam mesmo se não fosse do mesmo time, percebi também o progresso do pessoal, fiquei feliz em ver que a disciplina agregou não só para mim."_

## Frases que representaram o desenvolvimento do projeto

_Lute como nunca, perca como sempre. O caminho é longo mas a derrota é certa._ - **Gaby**

_Nenhum problema é grande demais para quem conhece a gambiarra correta._ - **Hian**

_Lascou-se. Socorro @Deus_ - **Laís**

_O pessimista se queixa do vento, o otimista espera que ele mude, o realista ajusta as velas e quem conhece Murphy não faz nada._ - **Pedro H. Elias**

_A coragem não é ausência do medo; é a persistência apesar do medo._ - **Maria Eduarda Barbosa**

_Nunca deixe ninguém te dizer que você não consegue! Diga você mesmo: Eu não consigo!_ - **Maria Eduarda Marques**
