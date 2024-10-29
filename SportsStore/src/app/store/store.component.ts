import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {
    selectedCategory: string | undefined;
    productsPerPage = 4;
    selectedPage = 1;
    constructor(private repository: ProductRepository) { }
    get products(): Product[] {
      let pageIndex = (this.selectedPage - 1) * this.productsPerPage
      return this.repository.getProducts(this.selectedCategory)
          .slice(pageIndex, pageIndex + this.productsPerPage);
}

get categories(): string[] {
    return this.repository.getCategories();
  }
  changeCategory(newCategory?: string) {
    this.productsPerPage = 4; // added a page reset for user friendliness
    this.selectedPage = 1; // added a page reset for user friendliness
    this.selectedCategory = newCategory;
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  // get pageNumbers(): number[] {
  //   return Array(Math.ceil(this.repository
  //   .getProducts(this.selectedCategory).length / this.productsPerPage))
  //   .fill(0).map((x, i) => i + 1);
  // }

  get pageCount(): number {
    return Math.ceil(this.repository
    .getProducts(this.selectedCategory).length / this.productsPerPage)
    }
}
