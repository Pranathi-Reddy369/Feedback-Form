import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../task.model';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
  tasks$!:Observable<Task[]>;
  tasks: Task[]=[]
  taskForm: Task ={
    taskName: '',
    assignee:'',
    status:'Not Started'

  };
  constructor (private taskService:TaskService){}
  ngOnInit(){
    this.loadTasks();
  }
  loadTasks(){
    this.taskService.getTasks().subscribe(data=>this.tasks=data);
  }
  addOrUpdateTask(){
    if (this.taskForm.id){
      this.taskService.editTasks(this.taskForm.id,this.taskForm).subscribe((updatedTask)=>{
        const index= this.tasks.findIndex((t)=>t.id===updatedTask.id);
        if (index !==-1){
          this.tasks[index]=updatedTask;
          this.reset();
        }
      })
    }
    else{
    this.taskService.addTasks(this.taskForm).subscribe(newTask=>{
      this.tasks.push(newTask);
      this.reset();
    // this.taskForm={
    //   taskName:'',
    //   assignee:'',
    //   status:'Not Started'
    // };
  });
  }}
  editTask(task: Task){
    this.taskForm={...task}

    
  }
  deleteTask(task: Task) {
  if (!task.id) return;

  this.taskService.deleteTasks(task.id).subscribe(() => {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  });
}

  reset(){
    this.taskForm={
      taskName:'',
      assignee:'',
      status:'Not Started'
    };

  }

  


}
