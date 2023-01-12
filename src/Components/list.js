import React from 'react';
const list = ({list,remove})=> {
   return(
        <>
       {
         list?.length > 0 ?(
            <ul className="todolist">
                {list.map((entry,index) =>(
                 <div className="todo">
                    <li key={index}>{entry}</li>
                    <button className="delbtn" 
                    onclick={() => {
                        remove(entry);
                    }}>Delete</button>
               </div>  ))} 
                </ul>
         ):(

            <div className="empty">
                <p>No tasks</p>
            </div>
         )
       }
       </>
    );

};
export default list; 