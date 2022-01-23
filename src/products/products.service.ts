import { Injectable } from '@nestjs/common';
import {createProductDto} from  './dto/product.dto';

@Injectable()
export class ProductsService {
  private products = []

  find(id) {
    return this.products.find((p) => p.id === id);
  }

  create(productDto: createProductDto) {
    this.products.push(
      {
        ...productDto,
        id: this.products.length+1
      }
    )

    return this.products;
  }
}
