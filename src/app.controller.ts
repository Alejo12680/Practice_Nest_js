/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

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


  //obtener el id del parametro de la ruta que se indica y seria asi http://localhost:3000/producto/id1
  @Get('producto/:id')
  getProducs(@Param() params: any) {
    return ` obtuvó el paramero de la ruta: ${params.id}`;
  }

  // Otra forma de obtener el ID por los parametros, enviandocelo directo en el parametro de params. http://localhost:3000/producto_2/este_id
  @Get('producto_2/:productoId')
  getProducts_2(@Param('productoId') productoId: string) {
    return ` obtuvó el paramero de la ruta: ${productoId}`;
  }

  // Forma de obtener más de un parametro en params. http://localhost:3000/categories/id_string/products/productId_string
  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return ` obtuvó los dos parametros de la ruta: ${productId} y ${id}`;
  }

  // Otra forma de tomar varios parametros es desetructurando el parametro. http://localhost:3000/categories_2/:categoryId/products/:productId
  @Get('categories_2/:categoryId/products/:productId')
  getCategory_2(@Param() { categoryId, productId }) {
    return `Product ${productId}, Category ${categoryId}`;
  }

  // Parametros tipo query, estos son utilizados para enviar grandes cantidades de datos, sirven como puede ser un filtro, inicia con el signo de ? y se concatenan con el ampersam & y pueden tener muchos más parametros, se crean varios constantes para cada paremetro, desestructuracion. http://localhost:3000/mostProducts?limit=1212&offset=12
  @Get('mostProducts')
  getMostProducts(@Query() params: any) {
    const { limit, offset } = params;
    return `Parametros obtenidos limit=> ${limit}, offset=> ${offset}`;
  }

  // Al igual como params se puede especificar el parametro, en la query http://localhost:3000/mostProducts_2?brand=xyz
  @Get('mostProducts_2')
  getMostProducts_2(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Parametros obtenidos limit=> ${limit}, offset=> ${offset}, brand=>${brand}`;
  }
}
