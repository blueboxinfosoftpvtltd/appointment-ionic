import { Injectable } from '@angular/core';
import { VoidRo } from '../forms/void-ro';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoService {

  constructor(private http: HttpClient) { }

  async voidRo(data: VoidRo) {
    return this.http.post(environment.baseApiUrl + "/VoidRO", data).toPromise();
  }

}
