import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl='http://localhost:3001/feedback';

  constructor(private http:HttpClient) { }
  getFeedback():Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.apiUrl);
  }
  AddFeedback(feedback:Feedback):Observable<Feedback>{
    return this.http.post<Feedback>(this.apiUrl,feedback);
  }
  EditFeedback(id:number,feedback:Feedback):Observable<Feedback>{
    return this.http.put<Feedback>(`${this.apiUrl}/${id}`,feedback);
  }
  DeleteFeedback(id:number):Observable<Feedback>{
    return this.http.delete<Feedback>(`${this.apiUrl}/${id}`);
  }
}
