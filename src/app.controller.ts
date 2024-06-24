/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // ruta secundaria iria haci http://localhost:3000/nuevo
  @Get('nuevo')
  newEndpoint() {
    return " soy nuevo "
  }

  // A diferencia de express, nest no molesta por la ruta si tiene slash o no tiene, lo unico que importa es el nombre http://localhost:3000/nuevo
  @Get('/rutas/')
  hello() {
    return " con slash o sin slash "
  }


  //obtener el id del parametro de la ruta que se indica. y seria asi http://localhost:3000/producto/id1
  @Get('producto/:id')
  getProducs(@Param() params: any) {
    return ` obtuvó el paramero de la ruta: ${params.id}`;
  }
}
