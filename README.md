# Exercícios em Javascript

## Sumário

- [Sobre](#sobre)
- [Começando](#comecando)
- [Executando](#uso)

## Sobre <a name = "sobre"></a>

Possui vários arquivos _*.js_, contendo resoluções de exercícios.

## Começando <a name = "comecando"></a>

### Pré-requisitos

O projeto faz uso de um ambiente com <strong>Node.js</strong>.
Voce poderá fazer uso de <strong>Docker</strong> ou, fazer a instalacao do Node, em seu sistema.
Segue abaixo, lista com a documentação da intalação das ferramentas.

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

Caso tenha optado por utilizar <strong>Docker</strong>, faça o _build_ da imagem, a partir do _Dockerfile_ do projeto:

```
docker build -t scripts:latest .
```

## Executando <a name = "uso"></a>

Caso tenha instalado o <strong>Node.js</strong>, o _package.json_ contem alguns comandos para execução dos scripts, como:

```
npm start
```

Para a opção utlizando <strong>Docker</strong>, subir um container a partir da imagem criada, com:
```
docker run -d --name scripts -v $(pwd)/src/data:/home/node/scripts/src/data scripts:latest

Você pode visualizar os logs com:

```
docker logs scripts
``` 

