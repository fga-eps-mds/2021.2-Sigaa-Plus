# Guia de contribuição 
## Como contribuir
## Politica de issues
## Politica de branches
## Politica de desenvolvimento
## Politica de commits
De forma simples e clara as descrições das alterações devem ser feitas seguindo um padrão, indicando a issue resolvida e a funcionalidade (ou correção) adicionada.

Utilize tags para definir o propósito do commit:
* `ADD` : quando adicionar uma nova funcionalidade
* `DEL` : Caso seja um commit relacionado a remoção de algo
* `UPDATE` : quando atualizar alguma funcionalidade
* `FIX` : para referenciar correções
* `DOC` : para indicar documentação
* `REFACT` : indica refatoração do código
* `DOC` : indica relação com documentação

Ex:

`git commit -m " [tag] (Issue #x) : mensagem descritiva" `
## Politica de Pull Requests 

Os pull requests seguirão os seguintes critérios:

* As solicitações de pull request devem seguir o [template](https://github.com/fga-eps-mds/Tema-02/blob/main/.github/pull_request_template.md) definido. 

* Toda as solicitações de pull requests serão analisadas por um integrante do projeto, onde será testado as alterações em uma `branch` de desenvolvimento.

* Os pull requests devem referenciar qual issue está solucionando.

* Após a análise, caso a solicitação esteja de acordo com a resolução da issue, deve ser realizado o `merge` para a `branch` main e a issue deve ser fechada.

* Se o pull request não estiver alinhado com o que era esperado, será devolvido um feedback com as modificações necessárias.

* Caso queira solucionar mais de uma issue, certifique-se de abrir um pull request para cada uma delas.
