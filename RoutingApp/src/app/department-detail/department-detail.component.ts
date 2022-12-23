import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
  <h3> You Selcted department with id ={{departmentId}}</h3>
  <p>
    <button (click)="showOverview()">Overview</button><br><br>
    <button (click)="showContact()">Contact</button>
  </p>
  
  <button style="padding:5px;border-radius:5px"(click)="goPrevious()">Previous </button> <br><br>
  <button style="padding:5px;border-radius:5px"(click)="goNext()">Next</button> <br><br>
  <button style="padding:5px;background-color:violet;border-radius:5px" (click)="goToDepartments()">Back</button> `,


  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  
  public departmentId:any;
  constructor( private route: ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    //let id=this.route.snapshot.paramMap.get("id");
    // this.departmentId=id;
  this.route.paramMap.subscribe((params: ParamMap)=>{
    let id=(params.get('id'));
    this.departmentId=id;
  });
  }
  goPrevious(){
    let prevoiusId=this.departmentId -1;
    this.router.navigate(['/departments', prevoiusId])
  }
  goNext(){
    let nextId=parseInt(this.departmentId)+ 1;
    this.router.navigate(['/departments', nextId])
  }
  goToDepartments(){
    let selecetedId=this.departmentId ? this.departmentId:null;
    //this.router.navigate(['/departments',{id:selecetedId, test:'testvalue'}]);
    this.router.navigate(['../',{id:selecetedId}],{relativeTo: this.route})
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route})
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route})
  }

}