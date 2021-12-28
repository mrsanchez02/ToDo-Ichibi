import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

const App = () => {

  // Tareas en el localstorage:
  let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
  
  if(!tareasIniciales) tareasIniciales = [];
  
  const [update,setUpdate] = useState({
    isUpdate: false,
    task: ''
  });
  
  // Arreglo de tareas.
  const [tareas, setTareas] = useState(tareasIniciales);

  // Use effect para realizar ciertas operaciones cuando el State cambie:
  useEffect(() => {
    if(tareasIniciales){
      localStorage.setItem('tareas',JSON.stringify(tareas));
    } else {
      localStorage.setItem('tareas',JSON.stringify([]));
    }
  },[tareas,tareasIniciales])

  // Titulo condicional.
  const titulo = tareas.length === 0 ? '🎉 Hurra! No hay tareas pendientes! 🥳': 'Lista de pendientes:'

  // Crear tarea.
  const crearTarea = tarea => {
    if(update.isUpdate) {
      const newTasks = tareas.map(t => {
        if(t.id === tarea.id) t.entrada = tarea.entrada
        return t
      })
      setTareas(newTasks);
      setUpdate({ isUpdate: false, task: '' })
      return;
    } 
    setTareas([...tareas,tarea])
  }

  // Eliminar tarea.
  const eliminarTarea = id => {
    const nuevasTareas = tareas.filter(tarea => tarea.id!==id);
    setTareas(nuevasTareas)
  }

  const onClick = (id) => {
    const newTasks = tareas.map(t => {
      if(t.id === id) t.completado = !t.completado; 
      return t
    })

    setTareas(newTasks)
  }
  

  return (
    <Fragment>
      <div className="container px-5">
      <h1 className="my-5 fs-1">Mis tareas pendientes.</h1>
      <hr />
        <Formulario 
          crearTarea={crearTarea} 
          update={update}
        />
        <h2 className="display-6 mb-5">{titulo}</h2>
        <ul className="list-group list-group-flush">
          {
            tareas.map( tarea =>(
            <Lista 
            setUpdate={setUpdate}
              setComplete={onClick}
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