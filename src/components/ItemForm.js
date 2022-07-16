import { useState } from "react"


function ItemForm(props) {
  
  const [todoItem, setTodoItem] = useState('');

  function handleNameChange(event) {
    setTodoItem(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTodo(todoItem);
    setTodoItem('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Qué debes hacer?</label>
        <input type="text" name="todoItem" value={todoItem} onChange={handleNameChange}/>
        <input type="submit" value="Guardar elemento" />
      </form>
    </div>
  )
}

export default ItemForm;