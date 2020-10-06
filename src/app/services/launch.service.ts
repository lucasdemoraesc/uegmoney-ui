import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LaunchAbstract } from './../models/launch-abstract.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  private launch: LaunchAbstract;
  private baseUrl = "http://localhost:8080/api/v1/launch";

  constructor(private http: HttpClient) { }

  getLaunchSmall(): Observable<LaunchAbstract> {
    return this.http.get<LaunchAbstract>(`${this.baseUrl}?abstract`).pipe(
      map((obj) => obj)
    );
  }
}
