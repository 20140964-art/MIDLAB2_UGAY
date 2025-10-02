import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {

  tasks:any[] = [];

  constructor(private functions: TaskService) {}

  ngOnInit() {
    this.tasks = this.functions.getTasks();
  }

  get totalTasks() {
    return this.functions.getTotalTask();
  }
}
