import React from "react";
import { TodoItems } from "../MyComponents/TodoItems";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "100vh"
  }
  return (
    <>
      <div className="container my-3" style={myStyle}>
        <h3 className="text-center my-3">Linkites Infotech Pvt Ltd Employee's Details</h3>
        {props.todos.length === 0 ? <p className="text-center">---: No Details Available :---</p> :
        props.todos.map((todo) => {
          return (
          <TodoItems key={todo.sno} todo={todo} onDelete={props.onDelete} />
          )
        })}
        
      </div>
    </>
  );
};
