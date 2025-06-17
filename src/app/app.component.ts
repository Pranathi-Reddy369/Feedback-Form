import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChilddComponent } from './childd/childd.component';
import { ParentComponent } from './parent/parent.component';
import { TaskParentComponent } from './task-parent/task-parent.component';
import { TaskChildComponent } from './task-child/task-child.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CRUDComponent } from './crud/crud.component';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChildComponent,CommonModule,FormsModule,CounterComponent,DashboardComponent,ChilddComponent,ParentComponent,TaskParentComponent,TaskChildComponent,ProductsComponent,ProductCardComponent,CartItemsComponent,CRUDComponent,FeedbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  







  
  // counter=0;
  // updateCount(){
  //   this.counter++;
  // }












  // msg : string='';
  // localUsers : {name : string, status : string}[]=[]
  // constructor(private insatnce: UserServiceService){} 

  // ngOnInit(): void {
  //   this.localUsers=this.insatnce.users
  // }








  // title = 'my-app';
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


