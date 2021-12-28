import React,{useState} from "react";
import { v4 } from "uuid";

const Formulario = ({crearTarea}) => {

  const [tarea, setTarea] = useState({
    entrada:''
  });

  const [errorForm, setErrorForm ] = useState(false);

  const { entrada } = tarea;

  const handleChange = e => {
    setTarea({
      ...tarea,
      [e.target.name]:e.target.value
    })
  }

  // SubmitForm
  const submitTarea = e => {
    
    e.preventDefault()

    //* Validar.
    if(entrada.trim()===''){
      setErrorForm(true);
      return
    }
    
    //* Eliminar aviso.
    setErrorForm(false)

    //* Asignar id
    tarea.id = v4();

    //todo Crear tarea.
    // crearTarea(tarea)
    crearTarea(tarea);

    //* Reiniciar el form.
    setTarea({entrada:''})
  }

  return (
    <div className="container my-5 mx-auto">
      {
        errorForm ?
        <div class="alert alert-danger" role="alert">
          Tarea requerida!
        </div>
        : null
      }
      <form className="" onSubmit={submitTarea}>
        <div className="input-group">
          <input
          className="form-control" 
            type="text" 
            name="entrada" 
            placeholder="Escribe tu tarea..." 
            onChange={handleChange}
            value={entrada}
          />
          <button type="submit" className="btn btn-outline-secondary align-self-end">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
