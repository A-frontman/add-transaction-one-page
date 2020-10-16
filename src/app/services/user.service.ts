import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _saldo = 5824.76;

  public saldo(): number {
    return this._saldo;
  }

  public updateSaldo(): void {

  }
}
