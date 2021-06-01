import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  seats: string = ''
  train:string=''
  constructor(
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.seats = this.route.snapshot.paramMap.get('foo');
    this.train = this.route.snapshot.paramMap.get('id');
    //console.log(seats)
    //console.log(train)

  }

}
