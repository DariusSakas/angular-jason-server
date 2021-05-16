import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/Task';
import { TASKS } from '../../../test-data';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks: Task[] = TASKS;
  taskFromApi: Task[];

  constructor(private service: TaskService) {}

  ngOnInit(): void {
    this.service
      .getTasks()
      .subscribe((tasksFromApi) => (this.taskFromApi = tasksFromApi));
  }
}
