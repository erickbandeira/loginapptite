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
  selector: 'app-login',
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

      <h1>Login</h1>

      <div class="form-box">
        <ion-item>
          <ion-input
            label="Email"
            labelPlacement="floating"
            type="email"
            [(ngModel)]="email">
          </ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            label="Senha"
            labelPlacement="floating"
            type="password"
            [(ngModel)]="password">
          </ion-input>
        </ion-item>

        <ion-button expand="block" (click)="login()">
          Entrar
        </ion-button>

        <ion-button expand="block" fill="clear" (click)="goRegister()">
          Criar conta
        </ion-button>
      </div>

    </div>
  </ion-content>
  `
})
export class LoginPage {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
}
