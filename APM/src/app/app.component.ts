import { Component } from "@angular/core";
import { ProductListComponent } from "./products/product-list.component";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html', //any valid html
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}