import Todo from '../components/Todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addTodo, deleteTodo } from '../redux/modules/todo';

const Home = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const todoList = useSelector((state) => state.todo);
  console.log(todoList);

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };

  const handleDelete = (e) => {
    const id = e.target.parentNode.id;
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button type='submit'>add</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <Todo {...todo} key={todo.id} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
