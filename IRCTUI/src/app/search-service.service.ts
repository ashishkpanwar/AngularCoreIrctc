import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'http://localhost:64053/api/';
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) { }
  //private extractData(res: Response): any {
  //  const body = res;
  //  return body || {};
  //}

  //getProducts(): Observable<any> {
    //return this.http.get(endpoint + 'values')
      //.pipe(
      //map(this.extractData),
      //catchError(this.handleError)
   // );
  //}

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


