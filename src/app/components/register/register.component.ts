import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(){
    this.buildForm();
  }

  buildForm(){
    this.registerForm= this.builder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      username:['', Validators.required],
      password:['', Validators.required]
      
    }) 
  }

  register(){
    
  }

}
