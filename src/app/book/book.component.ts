import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Book } from './book';
import { BookService} from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book : Book;

  constructor(
      private bookService:BookService, // Call all the service layer method from this 
      private route : ActivatedRoute, // This help to get path param values from the url
      private router : Router//Call routing paths from the app-routing.module.ts
    ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() : void {
    const id = +this.route.snapshot.paramMap.get("id"); //Read id from the url
    if(id != 0){
        this.bookService.getBook(id).subscribe(book => this.book = book);
        console.log(id);
    }else{
      this.book = new Book(0, "", "", "", "", "", "");//Default book object value.
    }
  }

  saveBook(): void { 
    console.log(this.book);
    this.bookService.saveBook(this.book).subscribe(book=>this.book =book);
    console.log(this.book.title+ " saved successfuly")
    this.router.navigate(["/list"]);
  }

}
