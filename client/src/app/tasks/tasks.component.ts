import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Array<any>
  task: Object
  constructor(private _http: HttpService, private _router: Router) {
    this.tasks = []
    this.task = { title: null, description: null, completed: null}
  }

  ngOnInit() {
    this.getAll()
  }
  getAll(){
    this._http.getAll((res)=>{
      //console.log('in component getAll')
      this.tasks = res
    })
  }
  create(){
    console.log('in create components', this.task)
    this._http.create(this.task, (res)=>{
      this.task = { title: null, description: null, completed: null}
      this.tasks.push(res)
    })
  }
  edit(id){
    console.log('in edit components')
  }
  delete(id){
    console.log('in delete components', id)
    this._http.delete({'id':id}, ()=>{
      this.getAll()
    })
  }
}
