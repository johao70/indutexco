import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'IndutexCo';
  loginForm: FormGroup;
  mail: any;
  verDireccion: FormBuilder;
  items:  FormArray
  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.crearLoginForm();
    
  }
  
  crearLoginForm(){
    this.loginForm = this.fb.group({
      usuario:['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      items: this.fb.array([this.crearDireccion()])
    })
    
  }

  verificarLoginForm(){
    if(!this.loginForm.valid){
      alert('Formulario Icompleto')
    } else {
      alert('Correcto')
    }
    
    this.mail = this.loginForm.controls['mail'].errors;
    console.log(this.mail);
    if(this.mail){
      alert(JSON.stringify(this.mail));
    }
    


  }


  crearDireccion(): FormGroup {
    return this.fb.group({
      provincia: ['', [Validators.required]],
      canton: ['', [Validators.required]],
      ciudad:  ['999', [Validators.required]]
    })
  }

  addDireccion(){
    this.items = this.loginForm.get('items') as FormArray;
    this.items.push(this.crearDireccion());
    alert((this.items));
  }
}