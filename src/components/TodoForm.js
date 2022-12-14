import { useState } from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";         

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
           id: Math.floor(Math.random()* 10000),
            text: input
        });
        setInput('');  // to clear the todo item
    };
  
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input
         type="text" 
         placeholder="Add new todo" 
         value={input}
         name="text" 
         className="todo-input" 
         onChange={handleChange}
        />
        <button className="todo-button">Submit</button>
        
    </form>     
  )
}

export default TodoForm;