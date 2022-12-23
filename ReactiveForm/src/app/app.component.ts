import { Component } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private fb:FormBuilder){ }
  
   login:any= this.fb.group(
      {
    uname:['chay',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
    password:[null,[Validators.required,Validators.minLength(8)]],
    email:[null,'chay@gmail.com',[Validators.required,Validators.email]],
    mobiles:new FormArray([
            new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)])])

    //  login:any=new FormGroup({
    //  uname:new FormControl('chaitu',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    //  password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    //  email:new FormControl('chay@gmail.com',[Validators.required,Validators.email]),
    //  mobiles:new FormArray([
    //         new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)])])
        
  })
   
  show(){
    console.log(this.login);
  }

  add(){  
   let mobiles= this.login.get('mobiles') as FormArray
   mobiles.push(new FormControl(null,Validators.required))
  }
  delete(i:number){
    let mobiles= this.login.get('mobiles') as FormArray;
    mobiles.removeAt(i);
    console.log(mobiles)
  }
}