import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
@NgModule({
 imports: [ModelModule, CommonModule, FormsModule],
 declarations: [StoreComponent, CounterDirective],
 exports: [StoreComponent]
})
export class StoreModule { }
