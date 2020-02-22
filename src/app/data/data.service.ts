import { Injectable } from '@angular/core';
import {UserSettings} from './user-settings';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  // postUserSettingsForm(userSettings: UserSettings): Observable<UserSettings> {
  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    // return of(userSettings);

    // You will need to do the steps in 'Setup putsreq.docx' every time you want to redo this tutorial....
    // return this.http.post('https://putsreq.com/osNqx9elMrKHmaSiXTtQ', userSettings);
    return this.http.post('https://putsreq.com/WVE0p02p8WfmMx8AzCEt', userSettings);
  }
}
