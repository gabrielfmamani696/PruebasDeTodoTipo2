import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit{

  nombre?: string;
  fecha?:Date = new Date();
  dolar?:number = 1000.56;
  pi?:number = Math.PI;
  constructor(
    private _servicioFamiliar: ServicioFamiliarService
  ){}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan');
    this.nombre=this._servicioFamiliar.getHermanoGrande();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPeque() || '')
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
    
  }

  mensajeRecibido: string = '';

  recibirMensaje($event: string){
    this.mensajeRecibido = $event;
  }

  valorcontador: number =0;
  // mensajePadre = 'mensaje desde el padre nro 2'; //MANDAR DATOS
  incrementar(){
    this.valorcontador++;
  }
  decrementar(){
    this.valorcontador--;
  }
}
