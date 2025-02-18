import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const{todos,selectedTab,deletetodo,completetodo}=props;
    const tab=selectedTab;
    const finalList = tab === "All"
  ? todos
  : tab === "Completed"
    ? todos.filter(val => val.complete === true)  
    : todos.filter(val => val.complete === false);
    return(
        <>
        {
            finalList.map((todo,todoIndex)=>{
                return (
                    <TodoCard key={todoIndex} todo={todo} deletetodo={deletetodo} todoIndex={todoIndex} completetodo={completetodo}/>
                )
            })
        }
        </>
    )
}