import { Component } from '@angular/core';
import { TaskChildComponent } from '../task-child/task-child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-parent',
  standalone: true, 
  imports: [TaskChildComponent,CommonModule, FormsModule],
  templateUrl: './task-parent.component.html',
  styleUrl: './task-parent.component.css'
})
export class TaskParentComponent {
  taskName : string ='';
  taskPriority : string = '';
  status: string ='';
tasks: { name: string; priority: string; status: string }[] = [];
  // isTrue : boolean= false;
  // result : string ='';
  addTask(){
    if (this.taskName && this.taskPriority){
      this.tasks.push({name:this.taskName,priority:this.taskPriority,status: 'Pending'})
      // this.result=`${this.taskName} - ${this.taskPriority}`
      this.taskName = '';
    this.taskPriority = '';
    }

    }
     markAsCompleted(index: number) {
    this.tasks[index].status = 'Completed';
  }
    

  }



