import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  interpolationTitle = 'Formulario'
  propertyBinding = 'blue'

  newEmail = {
    title: 'Email',
    email: ''

  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit($event: any){
    console.log($event)
  }

}
