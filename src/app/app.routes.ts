import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChilddComponent } from './childd/childd.component';

export const routes: Routes = [
    {path : "", component : ParentComponent},
    {path :"about", component : ChilddComponent},
];
