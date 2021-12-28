import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

const App = () => {
  
  // Arreglo de tareas.
  const [tareas, setTareas] = useState([]);

  // Titulo condicional.
  const titulo = tareas.length === 0 ? '🎉 Hurra! No hay tareas pendientes! 🥳': 'Lista de pendientes:'

  const crearTarea = tarea => {
    setTareas([...tareas,tarea])
  }
  /**
   * 
   * 
   
  const completeTask = id => {
    const completeTask = tareas.filter(tarea => tarea.id ===id);
    completeTask.map(task=> {})
  }
*/
  const eliminarTarea = id => {
    const nuevasTareas = tareas.filter(tarea => tarea.id!==id);
    setTareas(nuevasTareas)
  }

  return (
    <Fragment>
      <div className="container px-5">
      <h1 className="my-5 fs-1">Mis tareas pendientes.</h1>
      <hr />
        <Formulario crearTarea={crearTarea}/>
        <h2 className="display-6 mb-5">{titulo}</h2>
        <ul className="list-group list-group-flush">
          {
            tareas.map( tarea =>(
            <Lista 
              key={tarea.id} 
              tarea={tarea}
              eliminarTarea={eliminarTarea}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default App;