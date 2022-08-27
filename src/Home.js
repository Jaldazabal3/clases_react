import { useState } from 'react';
import ListItem from './components/ListItem';

function Home() {

  const [newTodo, setNewTodo] = useState('');

  const [todos, setTodos] = useState([]);


  const resultado = todos.map(todo => {
    return (
      <ListItem  todoItem={todo} key={todo.id} />
    )
  });

  const submitForm = (event) => {
    event.preventDefault();
    setTodos(currentTodos => [...currentTodos, {
      id: currentTodos.length === 0 ? 1 : Math.max(...currentTodos.map(todo => todo.id)) + 1,
      text: newTodo
    }]);
    setNewTodo('');
  }



  return (
    <div>
      <h2>
        I am learning react!
      </h2>
      <form onSubmit={submitForm}>
        <input type='text' onChange={(event) => setNewTodo(event.target.value)} value={newTodo} />
        <button>
          Add Item!
        </button>
      </form>
      {resultado}
    </div>
  )
}

export default Home;