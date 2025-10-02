import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'] 
})
export class TaskList {
  tasks: any[] = [];

  constructor(private functions: TaskService) {}

  ngOnInit() {
    this.tasks = this.functions.getTasks();
  }

  get totalTasks() {
    return this.functions.getTotalTask();
  }

  onTaskStatusChange(task: any) {
    console.log(`${task.name} is now ${task.completed ? 'Completed' : 'Pending'}`);
  }
}
