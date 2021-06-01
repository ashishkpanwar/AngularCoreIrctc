import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../searchservice.service';
import { Router } from '@angular/router';
import { Stations } from '../Stations';
import { Trains } from '../Trains';
import { FormControl, FormBuilder } from '@angular/forms';
import * as $ from "jquery";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: Stations[] = [];
  Trai: Trains[] = [];
  fromsearched: Stations[] = [];
  toSearched: Stations[] = []; 
  searchcontent: string = ''
  posted: string = ''
  show: boolean = false
  toshow:boolean=false
  keyword: FormControl = new FormControl();
  formGroup;
  found: boolean = false
  searchstarted: boolean = false



  constructor(
    public rest: SearchserviceService,
    private router: Router
    ,private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      fromstation:'' ,
      tostation:'' ,

    });
  }

  ngOnInit(): void {
    this.search();          
  }
  refresh(): void {
    window.location.reload();
  }
  onSubmit(formData) {
    formData['fromstation'] = $("#keyword").val()
    formData['tostation'] = $("#tostation").val()
    this.searchstarted = true;
    var name = formData['keyword'];
    console.log(formData);

    this.rest.getRoutes(formData).subscribe((resp: any) => {
      //console.log(resp[0].id);
      this.Trai = resp;
      console.log(this.Trai);
      if (this.Trai.length != 0) {
        this.found = true;
      }
    });
  }

  onSelect(station:Stations): void {
    console.log(station.stationName);
    $("#keyword").val(station.stationName);
    this.fromsearched = [];
    this.show = false;


  }
  onToSelect(station: Stations): void {
    console.log(station.stationName);
    $("#tostation").val(station.stationName);
    this.toSearched = [];
    this.toshow = false;

  }
  search(): void {

    this.rest.getProducts().subscribe((resp: any) => {
      this.products = resp;
    })
    //});
    $("#keyword").
      keyup
      ((x) => {
        this.searchstarted = false;
        this.fromsearched = [];
       // this.rest.getProducts().subscribe((resp: any) => {
          //console.log(resp[0].id);
          //this.products = resp;
          this.products.forEach((y) => {
            if (
              y.stationName.toLowerCase().indexOf($("#keyword").val().toLowerCase()) !== -1) {
              this.show = true;
              this.fromsearched.push(y);
            }
          //});

        })
      });
    $("#tostation").
      keyup
      ((x) => {
        this.toSearched = [];
        this.searchstarted = false;
          // console.log(this.products[0]);
          // console.log(x);
          this.products.forEach((y) => {
            if (
              y.stationName.toLowerCase().indexOf($("#tostation").val().toLowerCase()) !== -1) {
              this.toshow = true;
              this.toSearched.push(y);
            }
          

        })
      });

  }

}
