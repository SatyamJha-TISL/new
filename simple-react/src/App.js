
 import React ,{ useState , useEffect} from "react" ; 
import './App.css';
// Importing components
import  Form from "./components/Form" ;
import TodoList from "./components/TodoList";

function App() {

  const [InputText ,setInputText] = useState("") ;
  const [todos , setTodo] = useState([]);
  const [state , setstate] =useState("all");
  const [filtered , setfilter] = useState([]);

  useEffect (()=>{
    filterhandler();
  } , [state])


  const filterhandler = () => {
    switch (state) {

      case 'completed' :
        setfilter(todos.filter((todo)=>todo.completed === true)) ;
          break ;

        case 'uncompleted' :
          setfilter(  todos.filter ((todo)=>todo.completed === false)) ;
            break ;

         default:
          setfilter(todos);
          break ;
          }
        
        };
  return (
    <div className="App">
    <header>
     <h1>Satyams Todo list</h1> 
    </header>

    <Form
     setInputText = {setInputText} 
    InputText ={InputText}
     todos ={todos}
     setTodo = {setTodo}
     state ={state} 
     setstate={setstate} />

    <TodoList 
    todos = { todos}/ >
    </div>
  );
}

export default App;
