import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

@ViewChild('txtBuscar') txtBuscar!: ElementRef<any>;

constructor(private gifsService:ServiceService){
  
}

  buscar(): void{
    const valor = this.txtBuscar.nativeElement.value;
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = "";
  }
}
