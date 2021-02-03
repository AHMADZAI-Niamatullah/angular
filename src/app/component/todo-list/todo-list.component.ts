import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import { TodoListService } from 'src/app/services/todo-list.service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0px)' })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'translateY(30px)' }))
      ])
    ])
  ]
})
export class TodoListComponent implements OnInit {


  constructor(private service : TodoListService) { }

  listTodos : Todo[]; // la liste de tâche à afficher à l'écran
  newTodo : string; // la nouvelle tâche que l'on va crééer
  idTodo : number;
  cacheBeforeEditTodo : string;
  filter: string;

  ngOnInit(): void { // au démarrage de la page

    // this.listTodos = [
    //   {
    //     "id" : 1,
    //     "title" : "Ma super tâche de la journée",
    //     "completed" : false,
    //     "editing" : false
    //   },
    //   {
    //     "id" : 2,
    //     "title" : "Autre tâche importante",
    //     "completed" : false,
    //     "editing" : false
    //   },
    //   {
    //     "id" : 3,
    //     "title" : "Tâche à faire mec",
    //     "completed" : false,
    //     "editing" : false
    //   }
    // ];

    this.listTodos = this.service.getTodos();
    this.idTodo = 4;
    this.filter = "All";

  }

  // Méthode permettant d'ajouter un Todo

  addTodo() : void {

    // trim() permet d'enlever les espaces vides
    if(this.newTodo.trim().length === 0) { // si la taille de mon champ est à 0 c'est que mon champ est vide
      return; // je ne fais rien
    }

    // console.log(this.newTodo);
    this.listTodos.push({
      id: this.idTodo,
      title: this.newTodo,
      completed: false,
      editing: false
      });

    this.newTodo = "";
    this.idTodo++;

  }

  // Méthode permettant de supprimer un Todo
  deleteTodo(idTodo:number): void {
    // console.log(idTodo);

    // filter retourne tous les todo qui n'ont pas l'id du todo que je veux supprimer
    // donc ca va me supprimer le todo avec idTodo en argument
    this.listTodos = this.listTodos.filter(todo => todo.id != idTodo);

  }

  // Méthode permettant de mettre en édition un Todo pour afficher l'input type text
  editTodo(todo:Todo) : void {
    this.cacheBeforeEditTodo = todo.title;
    todo.editing = true;
  }

  // Méthode permettant d'annuler la modification d'un input
  cancelEditTodo(todo:Todo) : void {
    todo.title = this.cacheBeforeEditTodo;
    todo.editing = false;
  }

  // Permet de gérer le moment ou j'ai finis l'édition de mon todo
  doneEditTodo(todo:Todo) : void {

    // Si au moment ou j'ai fini de modifier mon todo,
    // je n'ai mis aucune valeur valeur dans le todo
    // je remets la valeur initiale
    if(todo.title.trim().length === 0) {
      todo.title = this.cacheBeforeEditTodo;
    }

    todo.editing = false; // je précise que l'édition est finie
  }

  // Méthode permettant de retourner le nombre de tâches en cours
  todosRemaining() : number {

    return this.listTodos.filter(todo => todo.completed == false).length;

  }

  // Méthode qui permet d'afficher les todos filtrés
  //

  listOfTodosFiltered() : Todo[] {

    if(this.filter === "All") {
      return this.listTodos;
    } else if(this.filter === "Active") {
      return this.listTodos.filter(todo => !todo.completed);
    } else {
      return this.listTodos.filter(todo => todo.completed);
    }

  }

  // Méthode permettant de vider la liste des tâches complétées
  clearCompleted() : void {
    this.listTodos = this.listTodos.filter(todo => !todo.completed);
  }

  atLeastOneTodoCompleted() : boolean {
    return this.listTodos.filter(todo => todo.completed).length > 0;
  }

  // Première solution

  // checkAll() : void {
  //   this.listTodos.forEach(
  //     todo => todo.completed = (<HTMLInputElement> event.target).checked
  //   )
  // }

  // Deuxième solution

  checkAll(event) : void {

    const checked = event.target.checked;

    this.listTodos.forEach(
      todo => todo.completed = checked
    )

  }

}
