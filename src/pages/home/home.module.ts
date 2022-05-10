import { CommonModule } from "@angular/common";
import { MatTableModule } from '@angular/material/table';
import { NgModule } from "@angular/core";
import { HomePage } from "./home.component";

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  providers: [],
})
export class HomeModule {}
