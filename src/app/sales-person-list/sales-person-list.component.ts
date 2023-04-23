import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {
  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Aman","Mehra","amantulika@gmail.com",54000),
    new SalesPerson("Tulika","Mehra","tulikaaviral@gmail.com",64000),
    new SalesPerson("Aviral","Mehra","aviralmehra08@gmail.com",74000),
    new SalesPerson("Satyam","Rastogi","satyam@gmail.com",84000)
  ];
}
