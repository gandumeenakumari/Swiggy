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
firstname:new FormControl("",[Validators.required]),
lastname:new FormControl(""),
email:new FormControl(""),
mobile:new FormControl(""),
gender:new FormControl(""),
pwd:new FormControl(""),
rpwd:new FormControl("")

}
);

registerSubmitted(){
  console.log(this.registerForm.value);
}
}
