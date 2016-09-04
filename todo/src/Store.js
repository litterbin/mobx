import { extendObservable,computed,action } from 'mobx'

export class Todo {
    constructor(title = "") {
        this.id = Math.random()
        extendObservable(this, {
            title: title,
            finished : false
        })
    }
}

export class TodoList {
    constructor() {
        extendObservable(this,{
            todos: [],
            unfinishedTodoCount: computed(() => this.todos.filter(todo => !todo.finished).length)
        })
        action(this.addTodo)
    }
    addTodo(title) {
        this.todos.push(new Todo(title))
    }

}

