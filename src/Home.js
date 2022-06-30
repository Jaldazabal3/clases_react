

function Home() {

  function showMessage() {
    alert('it works')
  }

  const todos = [
    'Fregar los platos',
    'Sacar a pasear a Sultán',
    'Dormir la siesta',
    'Practicar programación'
  ];


  const resultado = todos.map(todo => {
    return (
      <li>{todo}</li>
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