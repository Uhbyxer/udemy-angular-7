import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public userActivated = new Subject();

  constructor() { }
}
