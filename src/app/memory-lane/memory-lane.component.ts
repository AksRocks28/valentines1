import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';  // <-- import this
import { Router } from '@angular/router';

@Component({
  selector: 'app-memory-lane',
  templateUrl: './memory-lane.component.html',
  styleUrls: ['./memory-lane.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule] // <-- paste it here, inside imports array
})
export class MemoryLaneComponent {
  showPrompt = false;
  showValentine = false;

  constructor(private router: Router) {
    setTimeout(() => {
      this.showPrompt = true;
    }, 4000);
  }

  playMusic() {
    const audio = new Audio('/assets/valentine-music.mp3');
    audio.play();
    this.showValentine = true;
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
