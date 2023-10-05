import {usestate,useEffect} from "react";

const api_base = "https//:localhost:3001";
function App() {
    const [todos,setTodos] = useState([]);
    const[popupActive,setPopupActive] = useState(False);
    const [newTodo,SetNewTodo] = useState("");

    useEffect(() =>{
        GetTodos();   console.log(todos) },[])
        

    const GetTodos = () =>{
      fetch(api_base)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("error",err));
    }

    const completeTodo = async id => {
       const data = await fetch(api_base + "/todo/complete/" + id)
       .then(res => res.json());

       setTodos(todos => todos.map(todo => {
        if (todo === data._id){
            todo.complete = data.complete
        }
        return todo;
    }));


    const deleteTodo = async id => {
        const todelete = await fetch(api_base + "todo/delete/" + id ,{method:"delete"})
        .then(res => res.json())
        setTodos(Todos => todos.filter(todo => todo_.id !== data_.id));
    }

    const addTodo = async () => {
        const data = await fetch(api_base + "/todo/new",{method:"POST",
        headers:{"contenttype":"application/json"},
    body: JSONstringify({
        text:newTodo
    }) 

    }).then(res => res.json());

  setTodos(...todos,data);
  setPopupActive(false);
  SetNewTodo("");
}
    	return (
		<div className="App">
            <h1>Welcome Yusuf</h1>
            <h4>Your Tasks</h4>

        <div className ="todos">
            {todos.map(todo => (
                <div className ={
                    "todo" + (todo.complete ? "is complete" : "")}
                 key={todo._id} onclick = {() => completeTodo(Todo._id)}>
                <div className ="checkbox"></div>
                <div className ="text">{todo.text}</div>
                <div className ="Delete" onclick = {()=> deleteTodo(todo_.id)}>X</div>
                </div>
            ))}
        
        </div>

        <div classname="addpopup" onClick={() => setPopupActive(true)}></div>
        {popactive ?(
            <div classname ="popup">
                <div className="closepopup" onClick={()=> setPopupActive(false)}></div>
              <div classname="content">
                <h3>Add Task</h3>
                <input type="text" classname="addinput" onchange={e => SetNewTodo(e.target.value)}
                value={newTodo}></input>
                <div classname="button" onclick={addTodo}>Create Task</div>
              </div>
            </div>
        ):"" }
    </div>
	);
}
}
export default App;




