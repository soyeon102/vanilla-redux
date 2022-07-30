import { Link } from 'react-router-dom';

const Todo = ({ text, handleDelete, id }) => {
  return (
    <li id={id}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={() => handleDelete}>DEL</button>
    </li>
  );
};
export default Todo;
