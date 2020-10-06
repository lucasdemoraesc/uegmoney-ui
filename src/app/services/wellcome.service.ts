import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WellcomeMessage } from '../models/wellcome-message.model';

@Injectable({
  providedIn: 'root'
})
export class WellcomeService {

  private baseUrl = "https://api.adviceslip.com/advice";
  private message: WellcomeMessage;

  constructor(private http: HttpClient) { }

  getMessage(): Observable<WellcomeMessage> {
    return this.http.get<WellcomeMessage>(this.baseUrl).pipe(
      map((obj) => obj)
    );
  }
}
