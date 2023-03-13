import { useState } from'react';
import { useDispatch } from'react-redux'; // Importamos el hook useDispatch.
import { addtask } from'../../features/counter/pruebaSlider.js'; 
import "./style.css";
// Importamos nuestra accion para agregar una tarea.

const AddTask = () => {
  const dispatch = useDispatch(); // Inicializamos el disparador.
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
	// Se ejecuta cuando el usuario presiona una tecla:
  const handleKeyDown = (e) => {
    e.preventDefault();
		// Evaluamos que la tecla presionada sea "Enter":
			// Disparamos el action addTask y enviamos el texto como payload.
      dispatch(addtask({ text }));
			// Borramos el texto del input.
      setText('');
  };
 
 
 
  // Fix an ability to calculate completed tasks
// const [task,setTask]=  useState({
//     title:'',
//     description:'',
// })
// const handleChange = e => {
// setTask({
//     ...task,
//     [e.target.value]: e.target.value
// })
// }
// const handleSubmmit = (id) => {
//   id.preventDefault()
//   console.log(task);

// }

  return( 
    <section className='TodoInput' >
      <form className="add-task-form" action="" method="post" onSubmit={handleKeyDown} >
    <input name="tittle" type="text" placeholder="tittle" onChange={handleInputChange} />
    <textarea name="description" placeholder="description" onChange={handleInputChange} ></textarea>
    <button className='button'  >ADD TO DO</button>
   </form>
    </section>
 )
 
};

export default AddTask;
