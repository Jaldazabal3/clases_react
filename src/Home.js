import { useState } from 'react';
import ItemForm from './components/ItemForm';
import ListItem from './components/ListItem';

function Home() {


  const [todoList, setTodoList] = useState([]);


  function addTodo(todoText) {
    setTodoList(currentValue => currentValue.concat({
      id: currentValue.length > 0 ? Math.max(...currentValue.map(element => element.id)) + 1 : 1,
      text: todoText
    }));
  }


  return (
    <div>
      <h2>
        I am learning react!
      </h2>
      <ItemForm addTodo={addTodo}/>
      {
        todoList.map(todo => {
          return (
            <ListItem todoItem={todo} key={todo.id} />
          )
        })
      }
    </div>
  )
}

export default Home;