import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstProject';

  task = [
    {
      'name': 'Leer un libro',
      'description': 'Avanzar en el capitulo 5 hasta el 8'
    },
    {
      'name': 'Leer un libro 1',
      'description': 'Avanzar en el capitulo 5 hasta el 8'
    },
    {
      'name': 'Leer un libro 2',
      'description': 'Avanzar en el capitulo 5 hasta el 8'
    },
    {
      'name': 'Leer un libro 3',
      'description': 'Avanzar en el capitulo 5 hasta el 8'
    }
  ];

}
