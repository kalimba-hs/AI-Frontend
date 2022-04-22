import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modal: NgbModal, private service: ApiService) { }

  ngOnInit(): void {
  }

  alert:boolean = false
  res:any
  
  onSubmitMovie(value:any){
  
    this.service.getModelMovie(value.input1,value.input2,value.input3)
    .subscribe((dataRes:any) =>{
      this.res = dataRes
      this.alert = true
      setTimeout(() =>{
        this.alert = false 
      },5000)
      
    })
  }


  onSubmitCir(value:any){
    this.service.getModelCir(value.input1,value.input2,value.input3,value.input4,
      value.input5,value.input6,value.input7,value.input8,value.input9,value.input10)
    .subscribe((dataRes:any) =>{
      console.log(dataRes)
      this.res = dataRes
      this.alert = true
      setTimeout(() =>{
        this.alert = false 
      },5000)
      
    })
  }

  onSubmitHep(value:any){
    this.service.getModelHep(value.input1,value.input2,value.input3,value.input4,
      value.input5)
    .subscribe((dataRes:any) =>{
      console.log(dataRes)
      this.res = dataRes
      this.alert = true
      setTimeout(() =>{
        this.alert = false 
      },5000)
      
    })
  }

  onSubmitStroke(value:any){
    this.service.getModelStroke(value.input1,value.input2,value.input3,value.input4,
      value.input5,value.input6,value.input7,value.input8,value.input9,value.input10)
    .subscribe((dataRes:any) =>{
      console.log(dataRes)
      this.res = dataRes
      this.alert = true
      setTimeout(() =>{
        this.alert = false 
      },5000)
      
    })
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
