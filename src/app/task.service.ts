import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl: string = 'http://localhost:3001/tasks';

  constructor(private http:HttpClient) { }
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  addTasks(task: Task):Observable<Task>{
  return this.http.post<Task>(this.apiUrl, task);
}
editTasks(id:number,task: Task):Observable<Task>{
  return this.http.put<Task>(`${this.apiUrl}/${id}`,task);
}
deleteTasks(id: number):Observable<Task>{
  return this.http.delete<Task>(`${this.apiUrl}/${id}`)
}
}

