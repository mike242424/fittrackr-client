import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  title = 'Fit Trackr';

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
