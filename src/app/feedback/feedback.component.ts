import { Component } from '@angular/core';
import { Feedback } from '../feedback.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  imports: [FormsModule,CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedbackList:Feedback[]=[];  
feedbackForm: Feedback={
  name : '',
  course: '',
  comment: ''
}

constructor(private feedbackService:FeedbackService){}
addOrUpdateFeedback(){
if (this.feedbackForm.id){
  this.feedbackService.EditFeedback(this.feedbackForm.id,this.feedbackForm).subscribe((updatedFeedback)=>{
    const index= this.feedbackList.findIndex((t)=>t.id===updatedFeedback.id)
    if(index!==-1){
      this.feedbackList[index]=updatedFeedback;
      this.reset();
    }
  })
  }
  else{
    this.feedbackService.AddFeedback(this.feedbackForm).subscribe( newFeedback =>{
      this.feedbackList.push(newFeedback);
      this.reset();
    })
  }

}
  
editFeedback(feedback:Feedback){
  this.feedbackForm={...feedback}

}
deleteFeedback(feedback:Feedback){
  if(!feedback.id) return;
  this.feedbackService.DeleteFeedback(feedback.id).subscribe(()=>{
    this.feedbackList=this.feedbackList.filter(t=>t.id!==feedback.id)
  })


}
reset() {
    this.feedbackForm={
      name:'',
      course:'',
      comment:''

    }}

}
