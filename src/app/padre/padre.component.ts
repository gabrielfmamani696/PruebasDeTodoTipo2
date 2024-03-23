import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

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
