import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonStoreService {
  public loginStatus: boolean = false;
  constructor() { }
  changeLoaginStatus(status: boolean) {
    this.loginStatus = status;
  }
}
