import { Component, OnInit } from '@angular/core';

import {Book} from '../book/book';
import {BookService} from '../book/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  title = 'Book List';

  noBooks = "No books available";

  loadingMessage = "Loading Data, Please wait ..."
  
  books : Book[];

  constructor(private bookService:BookService) {
     
   }

   ngOnInit() {
     this.getBooks();
  }


   //Get book service
   getBooks(): void{
     //Here we subscribe book service. This is the lambda expression "books =>this.books = books"
      this.bookService.getBooks().subscribe(books =>this.books = books);
   }

   deleteBook(book:Book): void {
    if(confirm("Are you sure to delete book "+book.title+"?")) {
      this.bookService.deleteBook(book.id).subscribe(response => {
        alert(response.message);
        this.getBooks();
      });
    }
  }

  

}
