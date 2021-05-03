
const tarefas = ['acorda', 'tomar banho', 'tomar cafê'];

const App = () => {
  return(
    <ul>{ tarefas.map((tarefa) => <li>{tarefa}</li>)}</ul>
  )}

export default App;
