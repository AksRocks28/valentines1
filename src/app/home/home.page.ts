import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ValentinesModalComponent } from '../valentines-modal/valentines-modal.component';


interface Teddy {
  left: number;
  bottom: number;
  duration: number;
  size: number; // size in pixels
}
interface Heart {
  left: number;
  duration: number;
  color: string;
}
interface Greeting {
  text: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {}

  teddies: Teddy[] = [];
  hearts: Heart[] = [];
  greetings: any[] = [];
  showGreeting: boolean = false;

  messages = [
    { level: 10, text: "You’re amazing! 💖" },
    { level: 30, text: "Hugs for you! 🧸" },
    { level: 50, text: "You make hearts happy! 💞" }
  ];
  


  spawnTeddy() {
    const teddyCount = 5; // fewer teddies
    for (let i = 0; i < teddyCount; i++) {
      const teddy: Teddy = {
        left: Math.random() * 90, // horizontal position
        bottom: 0,
        duration: 2 + Math.random() * 2, // animation duration
        size: 40 + Math.random() * 20 // bigger size
      };
      this.teddies.push(teddy);

      // Remove teddy after animation ends
      setTimeout(() => {
        this.teddies.shift();
      }, teddy.duration * 1000);
    }
  }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ValentinesModalComponent,
      cssClass: 'valentine-modal'
    });
    await modal.present();
  }

  

  
}




