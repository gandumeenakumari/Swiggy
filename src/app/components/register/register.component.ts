import { FactoryTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
repeatpass:string='name';
displayMsg:string='';
isAccountCreated:boolean=false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {}
registerForm=new FormGroup({
firstname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
lastname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
email:new FormControl("",[Validators.required,Validators.email]),
mobile:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10),]),
gender:new FormControl("",[Validators.required]),
pwd:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15),]),
rpwd:new FormControl(""),


}
);

registerSubmitted(){
  if(this.Pwd.value==this.Rpwd.value)
  {
    console.log(this.registerForm.valid);
    this.repeatpass='none'
    this.authService.registerUser([
      this.registerForm.value.firstname!,
      this.registerForm.value.lastname!,
      this.registerForm.value.email!,
      this.registerForm.value.mobile!,
      this.registerForm.value.gender!,
      this.registerForm.value.pwd!,
    ]).subscribe(res=>{
      if(res=='Success')
      {
        this.displayMsg="Account Created Successfully";
        this.isAccountCreated=true;
        
      }
      else if(res=='Already Exist')
      {
        this.displayMsg="Account Already Exist.Try another Email.";
        this.isAccountCreated=false;
      }
      else{
        this.displayMsg="Something went wrong";
        this.isAccountCreated=false;
      }
      console.log(res);
      
    });
  }
  else{
    this.repeatpass='inline'
  }
}
get FirstName():FormControl{
  return this.registerForm.get("firstname") as FormControl;
}
get LastName():FormControl{
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
get Rpwd():FormControl{
  return this.registerForm.get("rpwd") as FormControl;
}
}
