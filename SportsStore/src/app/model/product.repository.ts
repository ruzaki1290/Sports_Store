import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
// creates an array of products and array of categories
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];
  // constructor has getProducts method, which data gets assigned to products
  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
       this.products = data;
       this.categories = data.map(p => p.category ?? "(None)")
         .filter((c, index, array) => array.indexOf(c) == index).sort();
  });
  }
  // getProducts returns a list of products
  getProducts(category?: string): Product[] {
       return this.products
         .filter(p => category == undefined || category == p.category);
  }
  // requires id and returns an individual product
  getProduct(id: number): Product | undefined {
        return this.products.find(p => p.id == id);
  }
  // will get a list of all the categories
  getCategories(): string[] {
        return this.categories;
  }
}
