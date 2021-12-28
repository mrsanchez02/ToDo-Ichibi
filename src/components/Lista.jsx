import React from "react";

const Lista = ({ tarea,eliminarTarea }) => {
  return (
    <li 
    className="list-group-item list-group-item-action fw-light" 
    onDoubleClick={()=>eliminarTarea(tarea.id)}
    >📝 {tarea.entrada}</li>
  );
};

export default Lista;
