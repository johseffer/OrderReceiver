# OrderReceiver

## Aplicação destinada a controlar o preço de suas vendas de acordo com a rentabilidade de seus produtos
Demo: http://orderreceiver.herokuapp.com

## Tecnologias utilizadas

### Hospedagem
Aplicação em cloud, utilizando as seguintes plataformas:
- Azure
- Heroku
- AWS S3 (video assets)

#### Frontend (Hosted at Heroku: http://orderreceiver.herokuapp.com)
- Angular@7.1.0
- Angular/Cli@7.1.3
- Angular Material@7.1.1
- Express@4.16.4
##### Tests
- jasmine@2.99.1
- karma@3.1.1

#### Backend (Hosted at Azure: http://orderreceiver.eastus2.cloudapp.azure.com)
- .NET Core@2.1
- EF Core@2.2.1
- AutoMapper@8.0.0
- Simple Injector@4.4.2
##### Tests
- NUnit@3.10.1
- Moq@4.10.1

#### Database
- SQL Server@12.0 (Hosted at Azure Databases)

## Quick Start
- Clonar o repositório

    `git clone https://github.com/johseffer/RequestReceiver.git`
- Navegar até o diretório

    `cd ...\RequestReveiver`
#### Backend
- Navegar até o diretório

    `cd ...\RequestReceiver\backend\RequestReceiver-Core`
- Abrir Solution contendo projetos 

    `Arquivo ...\RequestReceiver\backend\RequestReceiver-Core\RequestReceiver-Core.sln`
#### Frontend
- Navegar até o diretório

    `cd .../RequestReceiver\frontend\rr-app`
- Executar utilizando Angular/Cli

    `ng serve`
