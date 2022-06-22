# Exercícios em Javascript

## Sumário

- [Sobre](#sobre)
- [Começando](#comecando)
- [Executando](#uso)

## Sobre <a name = "sobre"></a>

Possui vários arquivos *.js, contendo resoluções de exercícios.

## Começando <a name = "comecando"></a>

### Pré-requisitos

O projeto faz uso de um ambiente com NodeJS. 
Aconselho a utilizar o Docker mas, pode-se fazer a instalacao manual, em seu sistema.

| Ferramentas | Documentação |
| ------ | ------ |
| Git | https://git-scm.com/book/en/v2/Getting-Started-Installing-Git |
| Docker | https://docs.docker.com/desktop/ |
| NodeJS | https://nodejs.org/en/download/ |
### Instalação

Clonar o repositório, via SSH ou HTTPS:

```
git clone git@github.com:durvalprintes/scripts.git
```

Caso tenha optado por utilizar Docker, faça o build da imagem a partir do _Dockerfile_ do projeto:

```
docker build -t scripts:latest .
```


## Executando <a name = "uso"></a>

Caso tenha instalado o NodeJS, o _package.json_ contem alguns comandos para execução dos scripts, como:

```
npm start
```

Para a opção com Docker, subir um container a partir da imagem criada, como:
```
docker run -d -v $LOCAL/scripts/src/data:/home/node/scripts/src/data --name scripts scripts:latest
```

Você pode visualizar os logs com:

```
docker logs scripts
``` 

