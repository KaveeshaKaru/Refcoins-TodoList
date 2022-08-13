import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList(props) {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
      if(!todo.text || /^\s*$/.test(todo.text)){ 
        return;
      };

      const newTodos = [todo, ...todos];
      setTodos(newTodos);

    };

    const deleteTodo = id =>{
      const deleteArr = todos.filter(todo => todo.id !== id)

      setTodos(deleteArr);
    };

    const updateTodo = id =>{
      //console.log('update');
      
      let newArray = todos.map(todo => {
        if(todo.id === id){
          todo.isComplete = true;
        }
        return todo;
      })

      setTodos(newArray);
    };

  return (  
    <div>
        <h3> What needs to be done ? </h3>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default TodoList;