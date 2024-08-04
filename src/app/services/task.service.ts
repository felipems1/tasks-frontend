import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskType } from '../types/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3333/task'

  constructor(private http: HttpClient) { }

  getTasks(title?: string): Observable<TaskType[]> {
    let params = new HttpParams();
    if (title) {
      params = params.set('title', title);
    }

    return this.http.get<TaskType[]>(this.apiUrl, { params });
  }

  deleteTask(task: TaskType): Observable<TaskType> {
    return this.http.delete<TaskType>(`${this.apiUrl}/${task.id}`);
  }
}
