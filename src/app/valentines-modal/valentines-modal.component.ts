import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonContent } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-valentines-modal',
  templateUrl: './valentines-modal.component.html',
  styleUrls: ['./valentines-modal.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ValentinesModalComponent {

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }
}
