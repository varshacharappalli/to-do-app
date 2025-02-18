
import { useState,useEffect} from "react";
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
  

  const [todos,setTodos]=useState([]);

  const [selectedTab,setSelectedTab]=useState('All');

  function addtodo(newTodo) {
    const newList = [...todos, { input: newTodo, complete: false }];
    setTodos(newList);
    saveData(newList);
}

  
  function completetodo(index){
    const newList = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, complete: true };
      }
      return todo; 
    });
    setTodos(newList);
    saveData(newList);
  }

  function deletetodo(index){
    let newList=todos.filter((val,valIndex)=>{return valIndex!==index});
    setTodos(newList);
    saveData(newList);
  }

  function saveData(currenttodos){
    localStorage.setItem('to-do-app',JSON.stringify({todos:currenttodos}));
  }

  useEffect(()=>{
    if(!localStorage||!localStorage.getItem('to-do-app')){
      return
    }
    let db=JSON.parse(localStorage.getItem('to-do-app'));
    setTodos(db.todos);
  },[]);


  return (
    
      <>
        <Header todos={todos}/>
        <Tabs todos={todos} const selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <TodoList todos={todos} selectedTab={selectedTab} deletetodo={deletetodo} completetodo={completetodo}/>
        <TodoInput addtodo={addtodo}/>

        </>

  )
}

export default App
