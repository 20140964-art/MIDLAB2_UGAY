import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {

  tasks: any[] =  [];

  constructor(private functions: TaskService){}

  ngOnInit() {
    this.tasks = this.functions.getTasks();
  }

  addToTaskList(taskName: any){
    this.functions.addToTaskList(taskName);
    alert (taskName+" has been added to task list")
  }
}
