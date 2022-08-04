import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.scss']
})
export class Formulario2Component implements OnInit {
  formulario2Form : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.formulario2Form=this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.max(8)]],
      color : ['',[Validators.required, Validators.minLength(4)] ],
      tipo : ['', Validators.required],
      url : ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)]],
      
    });
  }

  navigateToSend(){

    
    if (this.formulario2Form.valid) {
      console.log('Llamando servicio');
    }else{
      console.log('Llena tu informarcion');
    }
    console.log(this.formulario2Form.value)

    
  }

}
