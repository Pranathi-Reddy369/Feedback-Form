import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-child',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './task-child.component.html',
  styleUrls: ['./task-child.component.css']
})
export class TaskChildComponent {
@Input() result !: {name: string ; priority:string, status:string }[];
@Output() childCompleteTask = new EventEmitter<number>();

  onComplete(index: number) {
    this.childCompleteTask.emit(index);
  }

  getColor(priority: string): string {
    switch (priority) {
      case 'High': return 'red';
      case 'Medium': return 'orange';
      case 'Low': return 'green';
      default: return 'black';
    }
  }
}
