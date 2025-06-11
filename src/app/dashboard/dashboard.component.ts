import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  studentName: string = '';
  studentGrade: string = '';
  greeting :string = 'Welcome to the Student Dashboard!';
  color :string="";
  students: { name: string; grade: string }[] = [];
  addStudent(){
    if (this.studentName && this.studentGrade) {
      this.students.push({ name: this.studentName, grade: this.studentGrade });
      this.studentName = '';
      this.studentGrade = '';
    } 
  }
  
}
