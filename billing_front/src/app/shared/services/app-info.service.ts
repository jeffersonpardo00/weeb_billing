import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Billing_front';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
