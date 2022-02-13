# Guia de contribuição 
## Como contribuir

Contribuições para este projeto são bem vindos, porém, para manter organização, deve se manter as seguintes políticas:

- [Políticas de _issues_](#política-de-issues);
- [Política de _branchs_](#política-de-branches);
- [Política de desenvolvimento](#política-de-desenvolvimento);
- [Política de commits](#política-de-commits);
- [Política de Pull Requests](#política-de-pull-requests);
- Contribuidores de fora devem fazer um _fork_ do repositório e criar um  _pull request_.

## Política de issues

As issues são  localizadas em ser criadas no [repositório de documentação do projeto](https://github.com/fga-eps-mds/Tema-02/issues). Para a criação, use uma das [template de issue](https://github.com/fga-eps-mds/Tema-02/issues/new/choose).

Na criação da issue, confira se ela já não existe e siga esses passos:

1. Escolha o template de issue;
2. As issues devem conter:

- Um título conciso e descritivo;
- Requisitos da própria template;
- Milestone e responsáveis pela issue;

## Política de branches
## Política de desenvolvimento
## Política de commits
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
## Política de Pull Requests 

Os pull requests seguirão os seguintes critérios:

* As solicitações de pull request devem seguir o [template](https://github.com/fga-eps-mds/Tema-02/blob/main/.github/pull_request_template.md) definido. 

* Toda as solicitações de pull requests serão analisadas por um integrante do projeto, onde será testado as alterações em uma `branch` de desenvolvimento.

* Os pull requests devem referenciar qual issue está solucionando.

* Após a análise, caso a solicitação esteja de acordo com a resolução da issue, deve ser realizado o `merge` para a `branch` main e a issue deve ser fechada.

* Se o pull request não estiver alinhado com o que era esperado, será devolvido um feedback com as modificações necessárias.

* Caso queira solucionar mais de uma issue, certifique-se de abrir um pull request para cada uma delas.
