import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8080/'

  getModelCir(input1: any, input2:any,input3: any, input4:any,input5: any, input6:any,input7: any, input8:any,
    input9: any, input10:any) {
    return this.http.get(`${this.apiUrl}/predictCirrosis?input1=${input1}&input2=${input2}&input3=${input3}&input4=${input4}&input5=${input5}&input6=${input6}&input7=${input7}&input8=${input8}&input9=${input9}&input10=${input10}`);

  }
  
  getModelMovie(input1: any, input2:any,input3: any) {
    return this.http.get(`${this.apiUrl}/predictMovie?input1=${input1}&input2=${input2}&input3=${input3}`); 
  }  

  getModelHep(input1: any, input2:any,input3: any, input4:any,input5: any) {
    return this.http.get(`${this.apiUrl}/predictHepatitis?input1=${input1}&input2=${input2}&input3=${input3}&input4=${input4}&input5=${input5}`); 
  }

  getModelStroke(input1: any, input2:any,input3: any, input4:any,input5: any, input6:any,input7: any, input8:any,
    input9: any, input10:any) {
    return this.http.get(`${this.apiUrl}/predictStroke?input1=${input1}&input2=${input2}&input3=${input3}&input4=${input4}&input5=${input5}&input6=${input6}&input7=${input7}&input8=${input8}&input9=${input9}&input10=${input10}`);

  }

}
