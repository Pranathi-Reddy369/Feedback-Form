import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childd',
  standalone: true, 
  imports: [],
  templateUrl: './childd.component.html',
  styleUrl: './childd.component.css'
})
export class ChilddComponent {
@Input() msgToChild!: string;
  // @Output() childMessage = new EventEmitter<string>();

  // sendMessageToParent() {
  //   this.childMessage.emit('Hi mummy!');
  // }
  
}

