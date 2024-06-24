<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Creacion de Controladores

```bash
# --flat es para que no cree una carpeta 
$ nest g co controllers/orders --flat

# --no-spec para no crear el archivo de Spec.ts
$ nest g co controllers/orders --no-spec
```

## Creacion de Modulos

```bash
# --flat es para que no cree una carpeta 
$ nest g mo modules/orders --flat

# --no-spec para no crear el archivo de Spec.ts
$ nest g mo modules/orders --no-spec
```


## Creacion de Service

```bash
# --flat es para que no cree una carpeta 
$ nest g s service/orders --flat

# --no-spec para no crear el archivo de Spec.ts
$ nest g s service/orders --no-spec
```


## Estructura de Carpetas escalable en el proyecto

```bash
# Creación de carpertas de la estructura con su respectivo Controlador y su Servicio, no se crea el Modulo porque esta Global.
$ nest g co order/controller/order --flat --no-spec
$ nest g s order/service/order --flat --no-spec

$ nest g co user/controller/user --flat --no-spec
$ nest g s user/service/user --flat --no-spec

$ nest g co customer/controller/customer --flat --no-spec
$ nest g s customer/service/customer --flat --no-spec

$ nest g co category/controller/category --flat --no-spec
$ nest g s category/service/category --flat --no-spec

$ nest g co product/controller/product --flat --no-spec
$ nest g s product/service/product --flat --no-spec

$ nest g co brand/controller/brand --flat --no-spec
$ nest g s brand/service/brand --flat --no-spec
```
