import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    FormsModule
  ],
  styles: [`
    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }

    .form-box {
      width: 90%;
      max-width: 350px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  `],
  template: `
  <ion-content class="ion-padding">
    <div class="container">

      <h1>Criar Conta</h1>

      <div class="form-box">

        <ion-item>
          <ion-input
            label="Nome"
            labelPlacement="floating"
            [(ngModel)]="name">
          </ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            type="email"
            label="Email"
            labelPlacement="floating"
            [(ngModel)]="email">
          </ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            type="password"
            label="Senha"
            labelPlacement="floating"
            [(ngModel)]="password">
          </ion-input>
        </ion-item>

        <ion-button expand="block" (click)="register()">
          Cadastrar
        </ion-button>

        <ion-button expand="block" fill="clear" (click)="goLogin()">
          Já tenho conta
        </ion-button>

      </div>

    </div>
  </ion-content>
  `
})
export class RegisterPage {

  name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  register() {
    if (!this.name || !this.email || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }
    this.router.navigate(['/login']);
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
}
