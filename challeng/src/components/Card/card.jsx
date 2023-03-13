
const Card = ({id,label, cheked}) => {


  return (
    <div className="todo-list">
    
    {id}
      <div >
        {label}
      </div>
      <div className="no-todos">
    {cheked}
      </div>

    </div>
  );
};

export default Card;
