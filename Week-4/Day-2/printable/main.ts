import {Domino} from "./domino"
import {ToDo} from "./toDo"

let dominoes= []
let todos= []
let milk = new ToDo('Buy milk','High',true)
let domino =new Domino(2,3)
dominoes.push(domino)
todos.push(milk)

for (let domino of dominoes) {
    domino.printAllFields();
  }
  
  for (let todo of todos) {
    todo.printAllFields();
  }