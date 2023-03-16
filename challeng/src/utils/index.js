export const toDoResults = (toDos) => {
  return toDos.reduce((count, task) => {
       if(task.checked){
           count++;
       }
       return count;
   }, 0)
}