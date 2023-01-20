import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchGifs } from './inteface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _resultados: any;

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.result = JSON.parse(localStorage.getItem('result')!) || [];
  }

  private _historial: string[] = [];
  private api_key: string = 'qpJUmqrcZHCh6b9Kk8CpK4GX2foD6bTI';
  private url: string = 'https://api.giphy.com/v1/gifs';
  public result: Gifs[] = [];

  get historial() {
    return [...this._historial]
  }

  buscarGifs(query: string = "") {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('limit', '10')
      .set('q', query)

    this.http.get<SearchGifs>(`${this.url}/search`, { params })
      .subscribe((res: SearchGifs) => {
        this.result = res.data;
        localStorage.setItem('result', JSON.stringify(this.result));
      })

  }

}


