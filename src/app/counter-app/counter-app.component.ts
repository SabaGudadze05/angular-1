import { Component, OnChanges } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  standalone: false,
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.scss',
})
export class CounterAppComponent {
  countNumber: number = 0;
  minusButton: string = 'btn-outline-danger';
  plusButton: string = 'btn-outline-success';

  reset() {
    this.countNumber = 0;
    this.setButtonClass();
  }
  setButtonClass() {
    if (this.countNumber === 0) {
      this.minusButton = 'btn-outline-danger';
    } else {
      this.minusButton = 'btn-outline-success';
    }

    if (this.countNumber === 10) {
      this.plusButton = 'btn-outline-danger';
    } else {
      this.plusButton = 'btn-outline-success';
    }
  }
  plusMethod() {
    if (this.countNumber < 10) {
      this.countNumber++;
      this.setButtonClass();
    }
  }
  minusMethod() {
    if (this.countNumber > 0) {
      this.countNumber--;
      this.setButtonClass();
    }
  }
}
