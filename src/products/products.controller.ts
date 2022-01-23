import {Controller, Res, Req, Get, Param, HttpCode, HttpStatus, Post, Body, Delete, Put} from '@nestjs/common';
import {createProductDto} from  './dto/product.dto'
import {updateProductDto} from "./dto/update-product.dto";
import {ProductsService} from "./products.service";
@Controller('product')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {
  }
  @Get()
  getAll(@Req() req, @Res() res): string
  {
    return 'all';
  }

  @Get(':id')
  getProduct(@Param('id') id: string): string {
    return id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data: createProductDto) {

    return this.productsService.create(data)
  }

  @Put('id')
  update(@Body() data: createProductDto) {

    return `${data.title} + ${data.price}`
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return id;
  }
}
