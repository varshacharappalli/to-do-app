import { useState } from "react";

export function TodoInput(props){
    const {addtodo}=props;
    const [inputValue,setInputValue]=useState('');
    return(
        <div className="input-container">
            <input value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value)
            }}placeholder="Add your tasks"/>
            <button onClick={()=>{
                if(!inputValue){return}
                addtodo(inputValue);
                setInputValue('');
            }}>
            <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}