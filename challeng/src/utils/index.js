export const totalAmount = (tasks) => {
  return tasks.reduce((sum, todo) => {
       if(todo.checked){
           sum++;
       }
       return sum;
   }, 0)
}