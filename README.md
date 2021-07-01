# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).


Template do projeto gerado pelo Serverless "aws-nodejs-typescript"

Implementacao:

- 5 functions (Create,Update,Delete,List,LisALL)

- 5 UseCases para as repectivas functions 

- 5 testes , um para cada UseCase validando o funcionamento (UseCase-Teste)

- 2 Repositorios Implementando uma interface, InMemory foi usado para os Testes, EmployeeRepository para fazer as operacoes com o dynamoDB.


Lista paths para as functions lambda :

  POST - https://wbhfm9gdsk.execute-api.sa-east-1.amazonaws.com/dev/createEmployer
  PUT - https://wbhfm9gdsk.execute-api.sa-east-1.amazonaws.com/dev/updateEmployer/{id}
  DELETE - https://wbhfm9gdsk.execute-api.sa-east-1.amazonaws.com/dev/deleteEmployer/{id}
  GET - https://wbhfm9gdsk.execute-api.sa-east-1.amazonaws.com/dev/listEmployer/{id}
  GET - https://wbhfm9gdsk.execute-api.sa-east-1.amazonaws.com/dev/listallEmployer


Swagger - https://app.swaggerhub.com/apis-docs/stelmastchuk/Employee/1.0.0-oas3#/  - Nao terminei a configuracao(estive com o tempo curto), Mas mostra como deve ser as requisicoes.














