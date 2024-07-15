import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSpinnerService {
  private toggle = signal<boolean>(false);

  constructor() {
  }

  setToggle() {
    this.toggle.set(!this.toggle());
  }

  getToggleStatus() {
    return this.toggle();
  }
}
