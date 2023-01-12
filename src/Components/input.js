import React from 'react';

const input= ({todo,setTodo,addTodo}) =>{
   return (
      <div className="input-container">
         <input type="text" name="todo" value={todo} 
         placeholder="Type your Typos here..."
         onChange={(e)=> 
            {
            setTodo(e.target.value);
            }
        }/>

        <button className="btn" onclick={addTodo}>Add</button>
      </div>
   );
    
};


export default input; 