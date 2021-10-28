import React from "react"

let completedStyle = {
    fontStyle : "italic",
    color : "red" ,
    textDecoration : "line-through"
}

const TodoItem = (props) => 
        ( <div>
              <div className = "todo-item">
                <input type="checkbox" 
				       checked = {props.task.completed}
                       onChange = {()=> props.handleChange(props.task.id)}
			   />
                <span style={props.task.completed ? completedStyle:null} >
				  {props.task.text}
				</span>
              </div>
            <br/> 
          </div>   
         )
            
                       
export default TodoItem                       