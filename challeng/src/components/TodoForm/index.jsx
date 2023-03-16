import { useState } from'react';
import { useDispatch } from'react-redux'; // Importamos el hook useDispatch.
import { addtask } from'../../features/counter/pruebaSlider.js'; 
import "./style.css";
// Importamos nuestra accion para agregar una tarea.

const AddTask = () => {
  const dispatch = useDispatch(); // Inicializamos el disparador.
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
	// Se ejecuta cuando el usuario presiona una tecla:
  const handleKeyDown = (e) => {
    e.preventDefault();
   
    if (!text) {
      if (!text) {
       return 'Error!'
      }
    }
      dispatch(addtask(text));
		
      setText('');
  };
 
 

  return( 
    <section className='TodoInput' >
      <form className="add-task-form" action="" method="post" onSubmit={handleKeyDown} >
    <textarea className='description-new-task' name="description" placeholder="Enter new to do" onChange={handleInputChange} ></textarea>
    <button className='button'  >ADD TO DO</button>
   </form>
    </section>
 )
 
};

export default AddTask;
