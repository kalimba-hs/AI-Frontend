import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  openSM(contenido:any){
    this.modal.open(contenido,{size:'md'});
  }

  openSM2(contenido2:any){
    this.modal.open(contenido2,{size:'md'});
  }

  openSM3(contenido3:any){
    this.modal.open(contenido3,{size:'md'});
  }

  openSM4(contenido4:any){
    this.modal.open(contenido4,{size:'md'});
  }

  openSM5(contenido5:any){
    this.modal.open(contenido5,{size:'md'});
  }
  openSM6(contenido6:any){
    this.modal.open(contenido6,{size:'md'});
  }



}
