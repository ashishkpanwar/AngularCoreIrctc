import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stations } from './Stations';


const endpoint = 'http://localhost:64053/api/';
const body = { key: 'from', value: 'Value01' }
//  { from: 'how to do' };

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  station: Stations;
  constructor(private http: HttpClient) { }
  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

  getProducts(): Observable<any> {
    return this.http.get(endpoint + 'values')
    //  .pipe(
    //  map(this.extractData),
    //  catchError(this.handleError)
    //);
  }

  getRoutes(formdata: FormData): Observable<any> {
    return this.http.post<any>(endpoint + 'values', formdata)
      //.pipe(
      //map(this.extractData),
      //catchError(this.handleError)
     // map((data: any) =>
       // this.station = data.value)

     // );
  }

 // getProduct(id: string): Observable<any> {
   // return this.http.get(endpoint + 'values/' + id)
      //.pipe(
      //map(this.extractData),
      //catchError(this.handleError)
    //);

  //}




  //private handleError(error: HttpErrorResponse): any {
  //  if (error.error instanceof ErrorEvent) {
  //    console.error('An error occurred:', error.error.message);
  //  } else {
  //    console.error(
  //      `Backend returned code ${error.status}, ` +
  //      `body was: ${error.error}`);
  //  }
  //  return throwError(
  //    'Something bad happened; please try again later.');
  //}
}
