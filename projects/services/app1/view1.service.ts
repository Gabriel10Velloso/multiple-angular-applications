import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class View1Service {

  constructor() { }


  app1Mock(): Observable<any> {

    const val = [
      {
        "color": "red",
        "type": "eu",
        "registration": new Date('2011-03-01'),
        "capacity": 8
      },
      {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2012-02-03'),
        "capacity": 7
      }
    ]

    return of(val)
  }
}
