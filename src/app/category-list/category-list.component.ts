import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';  // Import your model

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];  // Use the Category interface for the type
  @Output() categorySelected = new EventEmitter<string>();

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {  // Specify the type of 'data'
      this.categories = data;
    });
  }

  onSelectCategory(category: Category): void {
    this.categorySelected.emit(category.name);
  }
}
