import React from "react";

const Lista = ({ tarea, eliminarTarea, setComplete, setUpdate }) => {
  const { id, entrada, completado } = tarea;

  return (
    <li
      className={`d-flex list-group-item list-group-item-action fw-light ${
        completado &&
        "text-decoration-line-through text-decoration-color-danger"
      } `}
    >
      <div 
      className="me-2"
        onClick={() => {
          if(completado) return
          setUpdate({ isUpdate: true, task: tarea })
        }}
      >📝</div>

      <div
        onClick={() => setComplete(id)}
        onDoubleClick={() => eliminarTarea(id)}
      >
        {entrada}
      </div>
    </li>
  );
};

export default Lista;
