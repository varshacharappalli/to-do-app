export function TodoCard(props){
    const{todo,deletetodo,todoIndex,completetodo}=props;
    return(
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={()=>{
                    completetodo(todoIndex);
                }} disabled={todo.complete}>
                    Done
                </button>
                <button onClick={()=>{
                    deletetodo(todoIndex);
                }}>
                    Delete
                </button>
            </div>
        </div>
    )
}