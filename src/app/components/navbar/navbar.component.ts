import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  title = 'Fit Trackr';
  hideButton: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hideButton = event.url === '/search';
      }
    });
  }

  openWorkoutModal() {
    const workoutModalDiv = document.getElementById('workoutModal');
    if (workoutModalDiv != null) {
      workoutModalDiv.style.display = 'block';
    }
  }

  closeWorkoutModal() {
    const workoutModalDiv = document.getElementById('workoutModal');
    if (workoutModalDiv != null) {
      workoutModalDiv.style.display = 'none';
    }
  }
}
