import { Component } from '@angular/core';
import { ChilddComponent } from '../childd/childd.component';
import { FormsModule } from '@angular/forms';
import { DirectiveDirective } from '../directive.directive';

@Component({
  selector: 'app-parent',
  standalone: true, 
  imports: [ChilddComponent,FormsModule,DirectiveDirective],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {
//  MsgToChild = 'Hi papa!';
//   childMsg = '';

//   recieveMsgFromChild(msg: string) {
//     this.childMsg = msg;
//   }
msgToChild='';



}
