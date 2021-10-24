import React from "react"

const TodoItem = () => 
        ( <div>
              <div className = "todo-item">
                <input type="checkbox" checked = {props.task.completed} />
                <span>{props.task.text}</span>
              </div>
            <br/> 
          </div>   
         )
            
                       
export default TodoItem                       