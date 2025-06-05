import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChildComponent,CommonModule,FormsModule,CounterComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  // isVisible : boolean =true;
  // items =["pra","hfhkf","jeuf"]
  // role= "";
  // Name: string = '';
  // Subject: string = '';
  // testScore1: number = 0;
  // testScore2: number = 0;
  // outputMessage: string = '';

  // greeting() {
  //   const total = this.testScore1 + this.testScore2;
  //   this.outputMessage = `Hello ${this.Name}! Your Score in ${this.Subject} is ${total}`;
  // }
}


