import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useInsertTodoMutation, useGetTodosQuery } from '../graphql/types';

const Home = () => {
  const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();
  const { data } = useGetTodosQuery();
  const [insertTodo] = useInsertTodoMutation();

  console.log('user', user);
  console.log('todos', data?.todos);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await insertTodo({ variables: { title, content } });
    setTitle('');
    setContent('');
  };

  console.log(title, content);

  return (
    <main>
      <h1 className="my-5 font-bold text-4xl text-gray-500 text-center">TOP</h1>
      {isAuthenticated && (
        <div>
          <p>{user?.email}</p>
          <button onClick={() => logout()}>ログアウト</button>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <p>ログイン</p>
          <button onClick={() => loginWithPopup()}>ログイン</button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>登録する</button>
      </form>

      {data && data.todos.map((el, i) => <p key={i}>todo: {el.title}</p>)}
    </main>
  );
};

export default Home;
