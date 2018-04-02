import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map,tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class UserServiceService {
	private loginurl = 'https://lbmanager-node.herokuapp.com/user/login'; 

  constructor(private http: HttpClient) { }

/*  login(data:any): Promise<any> {
  	        return new Promise((resolve,reject) => {
             this.http.post('https://lbmanager-node.herokuapp.com/user/login', data).subscribe(data => {
                console.log(data);
                resolve(data);
            },(data)=>{
                reject(data);
            });
        });      
}*/
 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

login(data:any){
  return this.http.post<any>('https://lbmanager-node.herokuapp.com/user/login', data,this.httpOptions).pipe(
    tap((result) => console.log("tap result::",result)),
    catchError(this.handleError('login',[]))
  );
}

 handleError<T> (operation = 'operation', result?: T) {
  return (error: any) : Observable<T>=> {
                console.error(error);
    return Observable.of(result as T);
  };
}

}
