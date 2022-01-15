import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Task {
  name: string,
  done: boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
today: Date= new Date();
tasks: Task[]=[];
tareaRealizada:boolean = false;
indexOfElement!: number;


form= new FormGroup({
  tarea: new FormControl(''),
})



putInList(){

this.tasks.push({name: this.form.value.tarea, done:false})
this.form.reset();
}

cross(index:number){
  this.tasks[index].done = !this.tasks[index].done

}

delete(index:number){
  console.log(this.tasks.length);
  console.log(this.tasks)
  this.tasks.splice(index, 1)
  console.log(this.tasks)

}
}

