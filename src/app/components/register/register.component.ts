import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
registerForm=new FormGroup({
firstname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
lastname:new FormControl(""),
email:new FormControl(""),
mobile:new FormControl(""),
gender:new FormControl(""),
pwd:new FormControl(""),
rpwd:new FormControl("")

}
);

registerSubmitted(){
  console.log(this.registerForm.get("firstname"));
}
get FirstName():FormControl{
  return this.registerForm.get("firstname") as FormControl;
}
get LatName():FormControl{
  return this.registerForm.get("lastname") as FormControl;
}
get Email():FormControl{
  return this.registerForm.get("email") as FormControl;
}
get Mobile():FormControl{
  return this.registerForm.get("mobile") as FormControl;
}
get Gender():FormControl{
  return this.registerForm.get("gender") as FormControl;
}
get Pwd():FormControl{
  return this.registerForm.get("pwd") as FormControl;
}
}
