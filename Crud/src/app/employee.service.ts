import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  deleteMeth(storeId: any) {
    throw new Error('Method not implemented.');
  }
  delete(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor( private http:HttpClient) { }
//  private url="/assets/mobile.json"
  public url="https://3e04-183-82-122-219.in.ngrok.io/users"
  private url1="https://fakestoreapi.com/products"
fetchData(){
  
   return this.http.get(this.url); 
}

fetchData1(){
  return this.http.get(this.url1)
}

deleteEmployee(id:any){
  return this.http.delete(this.url+"/"+id)
}
postMobile(body:any){
  return this.http.post(this.url,body)
  }
putMobile(body:any,id:any){
  return this.http.put(this.url+"/"+id,body)
}
}