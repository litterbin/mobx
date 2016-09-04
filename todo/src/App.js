import React, { Component } from 'react';
import './App.css';

import {TodoList} from './Store'
import {TodoListView} from './View'


const store = new TodoList()

class App extends Component {
  render() {
    return (
      <TodoListView todoList={store} />
    );
  }
}

store.addTodo("Get coffee!")
export default App;
