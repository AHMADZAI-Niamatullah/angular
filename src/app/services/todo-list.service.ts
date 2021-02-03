import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  // Ce service est responsable de nous renvoyer la liste de tâches en cours
  constructor() { }

// Méthode responsable de nous envoyer les tâches en cours
getTodos = () : Todo[] => {
  return [
    {
      id : 1,
      title : "Ma super tâche de la journée",
      completed : false,
      editing : false
    },

    {
      id : 2,
      title : "Autre tâche importante",
      completed : false,
      editing : false
    },

    {
      id : 3,
      title : "Tâche à faire mec",
      completed : false,
      editing : false
    }
  ];
}


}
