import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import  {ENV} from '../../env'

import 'rxjs/add/operator/map';
import 'rxjs/Rx';


  const httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) { }

  AppUsersList(): Observable<any> {
    const url = `${ENV.mainApi}appUsersList`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   appUsersList Test`)),
          catchError(this.handleError('get   appUsersList Test', []))
        
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
    console.log(message)
  }


  ////////////////////(harman)////////////////////////////
  ////////// 10 feb Login //////////////////////////////



}
