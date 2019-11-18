import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  GetData()
  {
   return this.http.get("http://192.168.43.73:4000/employees");
  }

  DeleteData(No)
  {
    return this.http.delete("http://192.168.43.73:4000/employees/" +No );
  }

  UpdateData(empObject)
  {
    console.log(empObject)

    return this.http.put("http://192.168.43.73:4000/employees/" + empObject.No,empObject );
  }

  GetDataByID(No)
  {
    
   return this.http.get("http://192.168.43.73:4000/employees/"+No );
  }

  AddData(empObject)
  {
   return this.http.post("http://192.168.43.73:4000/employees", empObject);
  }
}






