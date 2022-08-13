//import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


function Todo({todos, deleteTodo, updateTodo}) {

  

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    key ={index}
    >
        {todo.isComplete ? 
            <label className ="lable-complete">{todo.text}</label>
            :
            <label className ="lable-incomplete">{todo.text}</label>
      }
    



        <div className='delete'>
          <button className='todo-done1'onClick={() => updateTodo(todo.id)}>Done</button>
          <button className='todo-done2'onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>

    </div>
  ));
};

export default Todo;