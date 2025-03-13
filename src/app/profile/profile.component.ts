import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  firstName: string = 'საბა';
  age: number = 21;

  myBio: string = '';
  resetBioText() {
    this.myBio = '';
  }
}
