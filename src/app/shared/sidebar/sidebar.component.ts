import { Component } from '@angular/core';
import { ServiceService } from 'src/app/gifs/service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifsService: ServiceService) { }
  

  get historial(){

    return this.gifsService.historial;
  }

  buscar(termino:string){
    this.gifsService.buscarGifs(termino)
  }
}

