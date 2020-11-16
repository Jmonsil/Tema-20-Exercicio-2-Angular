import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
 // 
  //usuarios: any = [{
 //   "id": 1,
 //   "name": "Leanne Graham",
 // "username": "Bret",
 //   "email": "Sincere@april.biz",
 //   "address": {
 //   "street": "Kulas Light",
 //   "suite": "Apt. 556",
 //   "city": "Gwenborough",
  
 //}];


 usuarios: any = []; 

 constructor(private http: HttpClient) { }

getTodos() {
  return this.http.get('https://jsonplaceholder.typicode.com/users/');
}

}
