import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  constructor(private gifsService:ServiceService){}

  get data(){
    return this.gifsService.result;
  }
}
