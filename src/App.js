import  {useState} from 'react';
import Input from './Components/input';
import List from './Components/list';
import './App.css';

const App = () => {
const[todos,SetTodos]=useState([]);
const[todo,setTodo]=useState("");

const addTodo = () =>
{
  if(todo!==""){
    SetTodos([...todos,todo]);
    setTodo("");
  }
};

const deleteTodo = (text) =>{
   const newTodos= todos.filter((todo)=>{
     return todo!==text;
    });
  SetTodos(newTodos);
};

  return (
    <div className="App">
      <div className="App-header">
      <h1>My TODO App</h1>
      <Input todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <List list={todos} remove={deleteTodo}/> 
      </div>
    </div>
  );
}
export default App;
