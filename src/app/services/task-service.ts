import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private tasks = [
    {name: "Study 10x", isDone: false}
  ];

  getTasks() {
    return this.tasks;
  }

  addToTaskList(taskName: any){
    this.tasks.push({name: taskName, isDone: false})
  }

  getTotalTask() {
    let total = 0
    for (let task of this.tasks) {
      total += 1;
    }
    return total
  }
}
