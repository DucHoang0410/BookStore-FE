import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  searchTerm: string = ''; // Biến lưu từ khóa tìm kiếm

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks(); // Gọi API lấy sách khi component khởi tạo
  }

  // Gọi API lấy danh sách sách
  loadBooks(): void {
    this.bookService.getAllBooks().subscribe(
      (data) => {
        console.log('Books loaded:', data);
        this.books = data;
      },
      (error) => {
        console.error('Failed to load books:', error);
      }
    );
  }

  // Tìm kiếm sách theo tiêu đề
  searchBooks(): void {
    if (this.searchTerm.trim() === '') {
      this.loadBooks(); // Nếu ô tìm kiếm trống, tải lại tất cả sách
      return;
    }

    this.bookService.searchBooks(this.searchTerm).subscribe(
      (data) => {
        console.log('Books found:', data);
        this.books = data;
      },
      (error) => {
        console.error('Failed to search books:', error);
      }
    );
  }

  // Xóa sách và cập nhật danh sách sau khi xóa
  deleteBook(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa sách này?')) {
      this.bookService.deleteBook(id).subscribe(
        (response) => {
          console.log('Book deleted:', response);
          this.loadBooks(); // Cập nhật danh sách sách sau khi xóa
        },
        (error) => {
          console.error('Failed to delete book:', error);
        }
      );
    }
  }

  addToCart(book: any): void {
    console.log('Book added to cart', book);
  }
}
