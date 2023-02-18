import { useDispatch, useSelector } from 'react-redux';
import { loginAPI } from './redux/authSlice';

export default function App() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    // const res = await axios.post('http://localhost:8000/auth/login', {
    //   emailOrMobile: 'a@gmail.com',
    //   password: '123456',
    // });

    // localStorage.setItem('accessToken', res.data.accessToken)
    // const user = jwtDecode(res.data.accessToken)
    // dispatch { type: 'auth/login', payload: user }
    // dispatch login(user)
    dispatch(loginAPI('a@gmail.com', '123456'));

    // dispatch fn() {}
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{authUser ? authUser.email : 'Guest'}</h1>
      <div>
        <input />
      </div>
      <div>
        <input />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
