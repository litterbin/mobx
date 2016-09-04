import React, {Component} from 'react'
import {observer} from 'mobx-react'


class todoListView extends Component {
    render() {
        return <div>
            <ul>
            {this.props.todoList.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id} />
            )}
            </ul>
            Task left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}

/*
const TodoView  = observer((todo) => <li>
    <input type="checkbox"
           checked={todo.finished}
           onClick={()=> todo.finished = !todo.finished}
    /> <div>{todo.title}</div>
    </li>)
*/

class todoView extends Component {
    render() {
        const todo  = this.props.todo
        return <li>
            <input type="checkbox"
                checkbox={todo.finished}
                onClick={()=>todo.finished = !todo.finished } 
            />{todo.title}</li>
    }
}

export const TodoListView = observer(todoListView)
const TodoView = observer(todoView)
