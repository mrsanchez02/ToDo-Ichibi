import React,{useState,useRef} from "react";
import { v4 } from "uuid";

const Formulario = ({crearTarea,update: {isUpdate,task}}) => {
  
  const inputRef = useRef(null);

  const [tarea, setTarea] = useState({
    entrada: ''
  });
  
  const { entrada } = tarea;

  React.useEffect(() => {
    task.entrada && (inputRef.current.value = task.entrada)
    task.entrada && (inputRef.current.focus())
  }, [isUpdate,task.entrada])

  const [errorForm, setErrorForm ] = useState(false);

  const handleChange = ({ target: { name,value }}) => {
    if(isUpdate) {
      task.entrada = value
    }

    setTarea({
      ...tarea,
      [name]:value
    })
  }

  // SubmitForm
  const submitTarea = e => {
    e.preventDefault()
    if(isUpdate){
      if(task.entrada.trim() === '') {
        setErrorForm(true);
        return
      }

      //* Crear tarea.
      crearTarea(task);
      inputRef.current.value = '';
    }

     //* Validar.
     if(entrada.trim()===''){
      setErrorForm(true);
      return
    }

    //* Eliminar aviso.
    setErrorForm(false)

    //* Asignar id
    tarea.id = v4();
    tarea.completado = false;

    //* Crear tarea.
    crearTarea(tarea);
    inputRef.current.value = '';

    //* Reiniciar el form.
    setTarea({entrada:''})
  }

  return (
    <div className="container my-5 mx-auto">
      {
        errorForm ?
        <div className="alert alert-danger" role="alert">
          Tarea requerida!
        </div>
        : null
      }
      <form className="" onSubmit={submitTarea}>
        <div className="input-group">
          <input
            ref={inputRef}
            className="form-control" 
            type="text" 
            name="entrada" 
            placeholder="Escribe tu tarea..." 
            onChange={handleChange}
            // defaultValue={entrada}
          />
            <button type="submit" className={`btn btn-outline-${isUpdate ? 'danger' : 'secondary'} align-self-end`}>{isUpdate ? 'Actualizar' : 'Agregar'}</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
