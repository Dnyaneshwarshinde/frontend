import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit
{
  emp;
  message;
  
  No;

  constructor(public routes:ActivatedRoute,
              public service: DataService,
              public router: Router)
  {
    this.message = "";
    let parameterArrivalStatus = this.routes.paramMap;
//console.log(this.routes.paramMap);
    parameterArrivalStatus.subscribe((params)=>{
    this.No = params.get("No");
      
      this.getById();

    });
  }

  ngOnInit()
  {
    
  }

  getById(){
    this.service.GetDataByID(this.No).subscribe((res)=>{
        this.emp=res[0];
      //alert("hi..." +this.emp.No);
     })
  }

  Update()
  {
    let statusOfUpdate= this.service.UpdateData(this.emp);

    console.log(this.emp);
    statusOfUpdate.subscribe((result:any)=>{
      //console.log(result)
      if(result.affectedRows>0)
      {
        this.router.navigate(['home']);
      }
      else{
        this.message = "Something went wrong!";
      }
    });
  }

}
