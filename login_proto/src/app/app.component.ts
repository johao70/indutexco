import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FormBuilder) { 
    this.contactForm = this.createFormGoup();
  }

  loginForm: FormGroup
  // email: String
  // password: String

  ngOnInit() {
    // this.loginFormGroup()
  }

  passwordPattern: any= /^[A-Za-z]+[A-Za-z0-9-_.]*[0-9]*$/;
  emailPattern: any= /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+.[a-z]{3}[a-z0-9-]*(.[a-z]{2,4})$/;

  // loginFormGroup(){
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required,Validators.minLength(5), Validators.pattern(this.emailPattern), Validators.email]],
  //     password: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(18),Validators.pattern(this.passwordPattern)]]
  //   })
  // }

  createFormGoup(){
    return new FormGroup({
      email: new FormControl('', [Validators.required,Validators.minLength(5), Validators.pattern(this.emailPattern), Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(18),Validators.pattern(this.passwordPattern)])
    })
  }

  contactForm : FormGroup

  onResetForm(){
    this.contactForm.reset();
  }

  get email(){
    return this.contactForm.get('email');}
  get password(){
    return this.contactForm.get('password');}

  OnSaveForm(){
    if (this.contactForm.valid){
      this.onResetForm();
      alert('valido')
    }else{
      console.log('no vale')
    } 
  }

}