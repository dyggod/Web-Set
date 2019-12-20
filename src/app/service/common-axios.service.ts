import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

var env: boolean = environment.production;
var baseUrl: string = "";
if (env) {
  baseUrl = "http://49.232.166.197:8080/";
} else {
  baseUrl = "/api";
}
@Injectable({
  providedIn: 'root'
})

export class CommonAxiosService {
  baseUrl: string = baseUrl;
  constructor() { }
  service = axios.create({
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json; chartset=utf-8"
    }
  })
}
