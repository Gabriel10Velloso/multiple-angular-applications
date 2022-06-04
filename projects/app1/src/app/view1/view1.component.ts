import { Component, OnInit } from '@angular/core';
import { View1Service } from 'projects/services/app1/view1.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {

  constructor(private view1Service: View1Service) { }

  ngOnInit(): void {

    this.view1Service.app1Mock()
      .subscribe(res => {
        console.log('Teste', res)
      })
  }

}
