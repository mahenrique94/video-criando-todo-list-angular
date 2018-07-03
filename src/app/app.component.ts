import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tarefa : String = "";
  tarefas : Array<String> = [
    "Tarefa 1",
    "Tarefa 2",
    "Tarefa 3",
    "Tarefa 4",
    "Tarefa 5"
  ];

  adicionar() {
    this.tarefas.push(this.tarefa);
    this.tarefa = "";
  }

}
