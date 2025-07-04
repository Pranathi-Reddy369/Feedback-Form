import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CounterService } from '../counter/counter.service';

@Component({
  selector: 'app-display',
  imports: [AsyncPipe],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  constructor(public counterService:CounterService){}

}
