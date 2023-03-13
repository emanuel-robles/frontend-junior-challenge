import { useDispatch } from 'react-redux'; // Importamos el hook useDispatch.


const TodoListItem = ({ id, text, done })=>{
  const dispatch = useDispatch(); // Inicializamos el disparador.

	// Se ejecuta cuando el usuario hace clic en la tarea.
  const handleOnClick = () => {
		// Dispara el action toogleTask con el id de la tarea como payload.
    // dispatch(toggleTask({ id }));
  };
  const doneClass = done ? 'TodoItem--done' : '';
  return (
<div onClick={handleOnClick} >
{text}
</div>

  );
}
// ({ onCheck, checked, onDelete, label }) => (
//   <div className="todo-list-item">
//     <div
//       tabIndex="0"
//       role="checkbox"
//       aria-checked
//       className="todo-list-item-content"
//     >
//       <input
//         tabIndex="-1"
//         type="checkbox"
//         checked={checked}
//         onChange={onCheck}
//       />
//       <span className={checked ? "todo-list-item-checked" : ""}>{label}</span>
//     </div>
//     <button type="button" className="todo-list-item-delete" onClick={onDelete}>
//       x
//     </button>
//   </div>
// );

export default TodoListItem;
