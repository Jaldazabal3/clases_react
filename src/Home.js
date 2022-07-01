import ListItem from './components/ListItem';

function Home() {

  function showMessage() {
    alert('it works')
  }

  const todos = [
    {
      id: 1,
      text: 'Fregar los platos'
    },
    {
      id: 2,
      text: 'Sacar a pasear a Sultán',
    },
    {
      id: 3,
      text: 'Dormir la siesta',
    },
    {
      id: 4,
      text: 'Practicar programación',
    },
    {
      id: 5,
      text: 'Ir al gimnasio'
    },
  ];


  const resultado = todos.map(todo => {
    return (
      <ListItem  todoItem={todo} key={todo.id} />
    )
  });



  return (
    <div>
      <h2>
        I am learning react!
      </h2>
      <button onClick={showMessage}>
        Click me!
      </button>
      {resultado}
    </div>
  )
}

export default Home;