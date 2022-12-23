import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  title = 'crud';
   id=null;
   mobiles=null;
   employee=null;
   formHeader="Add Mobile";
   userName="";
   email="";
   password="";
   showForm=false;
   deleteform=false;
   body:any;
   errMsg:string="";
   storeId:any;
   formHeaderDelete="Are You Sure want to delete";
constructor(private ms:EmployeeService,private router:Router ){ }

ngOnInit(){
  console.log("qwert")
  this.getMobiles();
  this.getData();
      }
      
getMobiles(){
  this.ms.fetchData().subscribe((data:any)=>{ 
  this.mobiles=data;
  console.log(this.mobiles);
  
},
// (error)=>{
//   this.errMsg=error.mes;
//   console.log("error");}
)

}

getData(){
  this.ms.fetchData1().subscribe((data:any)=>{
    this.employee=data;
    console.log(this.employee)
  })
}
showDelete(id:any){
  this.deleteform=true;
  this.storeId=id;
}

deleteMobile(){
  this.formHeaderDelete="Are You Sure want to delete";
  console.log("delete");
      this.deleteMethod(this.storeId);
      this.deleteform=false;
  }
  deleteMethod(id1:any){
    this.ms.deleteEmployee(id1).subscribe((res:any)=>{
      this.getMobiles();
    })
  }

no(){
  this.deleteform=false;
}
openForm(data:any=null){
  this.clearForm();
  this.showForm=true;
  if(data){
    this.id=data['id'];
    this.userName=data['username'];
    this.email=data['email'];
    this.password=data['password_digest'];
    this.formHeader="Edit Employee"
  }
  else{
    this.id=null;  
    this.formHeader="Add Employee";
  }

}
closeForm(){
  this.showForm=false;
  this.clearForm();
}

clearForm(){
  this.id=null;
  this.userName="";
  this.email="";
  this.password="";
}
saveMobile(){
this.showForm=false;
 let body= { 
              "user": {
                      "id":this.id,
                      "username": this.userName,
                      "email": this.email,
                      "password_digest": this.password
                    }
            } 

if(this.id){
  this.ms.putMobile(body,this.id).subscribe((res:any)=>{
  this.getMobiles();
  })
}
else{ 
  this.ms.postMobile(body).subscribe((res:any)=>{
    this.getMobiles();
  })
}
}
onSelect(emp:any){
  this.router.navigate(['/details',emp.id])
}
}
