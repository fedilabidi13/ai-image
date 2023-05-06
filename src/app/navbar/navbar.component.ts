import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router : Router){}
  public submit(): void
  {
    const element = document.getElementById("close-modal");
  if (element) {
  element.click();
    }
   this.router.navigate(['result']);
  }
}
