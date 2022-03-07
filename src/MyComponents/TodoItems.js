import React from "react";

export const TodoItems = ({todo, onDelete}) => {
  return (
    <>
    <div>
      <p>{todo.Name} {todo.LastName} {todo.Company}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
    <hr/>
    </>
  );
};
