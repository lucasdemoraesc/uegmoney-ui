import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  private subject = new Subject<any>();

  constructor() { }

  sendShowSidebar() {
    this.subject.next();
  }

  getShowSidebarEvent(): Observable<any>{
    return this.subject.asObservable();
  }
}
