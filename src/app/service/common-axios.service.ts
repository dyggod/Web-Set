import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { environment } from '../../environments/environment';
import { config } from 'rxjs';
import { error } from 'protractor';

var env: boolean = environment.production;
var baseUrl: string = "";
if (env) {
  baseUrl = "http://49.232.166.197:8080/";
} else {
  baseUrl = "/api";
}
var service = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json; chartset=utf-8"
  }
})
service.interceptors.request.use(config => {
  const token = localStorage.webset_token || "";
  config.headers["token"] = token;
  return config
}, error => {
  return Promise.reject(error)
});
service.interceptors.response.use(respose => {
  if (respose.data) {
    if (!respose.data.isLogin) {
      // 清空token
      localStorage.webset_token = "";
      location.reload();
    }
  }
  return respose
}, error => {
  return Promise.reject(JSON.stringify(error))
})
@Injectable({
  providedIn: 'root'
})
export class CommonAxiosService {
  baseUrl: string = baseUrl;
  service = service;
  constructor() { }

}
