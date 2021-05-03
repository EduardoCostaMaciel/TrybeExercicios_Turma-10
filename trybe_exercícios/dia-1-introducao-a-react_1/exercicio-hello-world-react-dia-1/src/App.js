const tarefas = ['acorda', 'tomar banho', 'tomar cafê'];

const App = () => {
  return(
    <div className='myDiv'>
    <ul>{ tarefas.map((tarefa) => <li>{tarefa}</li>)}</ul>
    <h1>Hello JSX !!!</h1>
    <h1>my h1</h1>
    <br />
    <p>my p</p>
    <hr />
    <ul>
      <li>item 1</li> {/* my list de itens} */}
      <li>item 2</li>
      <li>item 3</li>
    </ul>
    </div>
  )
};

export default App;
