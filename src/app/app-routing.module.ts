import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';


const routes : Routes = [
  {path:'',redirectTo:'list', pathMatch:'full'},
  {path:'add', component:BookComponent}, //Consider 
  {path:'edit/:id', component:BookComponent},
  {path:'list', component:BookListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
