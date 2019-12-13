import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
// 基础路径
var baseUrl = "";
export class CommonAxiosService {

  constructor() { }
  service = axios.create({
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json; chartset=utf-8"
    }
  })
}
