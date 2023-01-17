# Desafio Cartão Digital

## Sobre o projeto

É uma aplicação mobile, de uma carteira digital, na qual o usuário pode
adicionar/remover os seus cartões e ocultar/exibir o número dos cartões
registrados.

## Tecnologias utilizadas

O projeto foi realizado em React Native e TypeScript, utilizando Expo e as
principais bibliotecas utilizadas foram:

- Redux toolkit;
- Redux persist;
- React hook-form

## Como iniciar o projeto

Para iniciar o projeto, siga os comandos abaixo, lembrando que é necessário ter
NodeJS instalado na máquina. A versão utilizada na criação do projeto é a
16.17.10:

```
yarn install
expo start
```

Após o <code>expo start</code> há duas maneiras para verificação do projeto.

1. Utilizando um emulador para celulares (Ex: Android Studio);
2. Instalando o aplicativo ExpoGO no celular, e lendo o QRCode gerado na
   inicialização do projeto;

### Outra maneira de acessar o projeto - Utilizando celular

É possível acessar o
<a href="https://expo.dev/@guiwustro/cartao-digital">aplicativo</a> pelo app
<b>Expo Go</b> do celular. Utilizando o QR Code abaixo:

<div align="center">
<img src="./screenshots/QRCode.jpg" width="300"/>
</div>

Ou copiando o código abaixo: </br>
exp://exp.host/@guiwustro/cartao-digital?release-channel=default

## Usabilidade

<div align="center">
<!-- COLOCAR UM GIF UTILIZANDO A APLICAÇÃO! -->
<img src="./screenshots/project-gif.gif" width="300"/>
</div>
## Features

- [x] Adicionar e remover cartões ;
- [x] Validação dos números dos cartões, com identificação das bandeiras.
      Abrangindo as bandeiras Elo, Visa, Hipercard, Diners, Amex e MasterCard ;
- [x] Botão para exibir/ocultar número do cartão;
- [x] Interface responsiva;
