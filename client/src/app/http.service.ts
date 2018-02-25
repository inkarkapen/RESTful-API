import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {}
  getAll(cb){
    this._http.get('/getAll').subscribe((res)=>{
      //console.log(res)
      cb(res)
    })
  }
  delete(id, cb){
    console.log('in service delete', id)
    this._http.post('/delete', id).subscribe((res)=>{
      cb()
    })
  }
  create(task, cb){
    this._http.post('/create', task).subscribe((res)=>{
      cb(res)
      //console.log(res, 'got back new task')
    })
  }
}
