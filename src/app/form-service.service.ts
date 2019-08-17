import { Injectable } from '@angular/core';
import { User } from './user';
import { array } from './userArray';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  add(newUser: User) {
    array.push(newUser);
  }

  getArray(): Observable<User[]> {
    return of(array);
  }
  constructor() { }
}
