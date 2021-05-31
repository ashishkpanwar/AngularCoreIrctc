import { Component, OnInit } from '@angular/core';
import { SearchServiceService} from '../search-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: String = "";


  constructor(
    //public rest: SearchServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //console.log(1);
    //this.search();
  }

  //search(): void {

  //  this.rest.getProducts().subscribe((resp: any) => {
  //    this.products = resp;
  //    console.log(this.products);
  //    //console.log("no data");
    //});

  //}

}
