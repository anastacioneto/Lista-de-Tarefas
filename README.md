# Boas vindas ao repositório do projeto Lista-de-Tarefa!

O projeto Lista de tarefas é uma aplicação que possui a finalidade de facilitar a organização de tarefas em ambientes de trabalho, auxiliando na otimização do tempo e produtividade das pessoas colaboradoras.

## Projeto em andamento

<details>
  <summary><strong> Estrutura do projeto</strong></summary><br/>

O projeto é composto de 4 entidades importantes para sua estrutura:

- [x] 1️⃣ **Banco de dados:**
  - Tem o papel de fornecer dados para o serviço _back-en_ para que possa ser feito o CRUD.

- [x] 2️⃣ **Back-end:**
  - Local onde é desemvolvido o CRUD por meio do sequelize.
  
- [ ] 3️⃣ **Front-end:**
  - Faz requisições para o back-end, para acessar e modificar os dados do banco através dos endpoints construídos, tornando a aplicação visível ao usuário.

- [ ] 4️⃣ **Docker:**
  - O Docker tem o objetivo de unir todas as partes e subir um projeto completo.

</details>

<details>
	<summary><strong> Funcionalidades</strong></summary><br/>

- [x] Cria tarefas
- [x] Visualiza todas as tarefas criadas
- [ ] Altera o status da tarefa
- [ ] Remove tarefa
- [ ] Edita tarefa
  
</details>

<details>
  <summary><strong> Explorando a aplicação</strong></summary><br/>

  1. Clone o repositório
    * `git clone git@github.com:anastacioneto/Lista-de-Tarefas.git`.
    * Entre na pasta do repositório que você acabou de clonar:
      * `cd Lista-de-Tarefas`

  2. Instale as dependências
    * `npm install`

  3. Crie uma branch a partir da branch `master`
    * Verifique que você está na branch `master`
      * Exemplo: `git branch`
    * Se não estiver, mude para a branch `master`
      * Exemplo: `git checkout master`
    * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
      * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
      * Exemplo: `git checkout -b nome-do-usuario-nome-do-projeto`

</details>

<details>
  <summary><strong>⚠️ Configurações mínimas nas máquinas locais para rodar o projeto</strong></summary><br />

Na sua máquina você deve ter:
	
 - Sistema Operacional Distribuição Unix
 - Node versão 16  
 - Docker
 - Docker-compose versão 1.29.2	
	
➡️ O `node` deve ter versão igual ou superior à `16.15.0 LTS`. 
	* Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
	*Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
		* `nvm install 16 --lts`
		* `nvm use 16`
		* `nvm alias default 16` 

➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`.
</details>