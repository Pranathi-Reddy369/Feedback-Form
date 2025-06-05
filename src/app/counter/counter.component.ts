import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count :number=0;

onIncrement(){
  this.count++;
}
onDecrement(){
  this.count--;
}
onreset(){
  this.count=0;
}
}
