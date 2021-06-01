import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';



const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
    data: { title: 'search' }
  },
  {
    path: 'booked/:id',
    component: BookingComponent,
    data: { title: 'booked' }
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
