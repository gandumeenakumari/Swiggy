import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginAuth:AuthService) { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    email:new FormControl(''),
    pwd:new FormControl(''),
  });
  isUserValid:boolean =false;
  loginSubmitted(){
    console.log(this.loginForm.valid);
    this.loginAuth.loginUser([this.loginForm.value.email!,this.loginForm.value.pwd!],)
    .subscribe(res=>{
      if(res=='Success')
      {
        console.log(res);
        this.isUserValid=true;
        alert('Login Successful');
        
      }
      else{
        
        this.isUserValid=false;
        alert('Login Unsuccessful');
      }
      console.log(res);
    });
    
  }
  get Email():FormControl{
    return this.loginForm.get('email') as FormControl;
  }
  get Pwd():FormControl{
    return this.loginForm.get('pwd') as FormControl;
  }

}
