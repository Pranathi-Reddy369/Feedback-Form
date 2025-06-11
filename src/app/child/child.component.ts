import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  isToggle = true;

  @Input() parentMessage!: string;
  counter = 0;
  interval : any;
  constructor() {
    console.log("Child Constructor Triggered!");
  }

  ngOnInit(): void {
    console.log("OnInit is triggered!");
    setInterval(()=>{
      this.counter++;
      console.log(this.counter);
    },1000);
  }

  ngOnDestory() : void {
    console.log("ngOnDestory is Triggered!")
  }
}







  
//   el ='Hello';
//   url: string  ="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg";
// p='';
// onClick(){
//   alert("Hii Friendss!!!!!!!")
// }

