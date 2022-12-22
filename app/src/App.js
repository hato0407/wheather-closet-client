import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import MyPage from './pages/MyPage/MyPage';
import Register from './pages/Register/register';
import Account from './pages/Account/Account';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mypage/:id" element={<MyPage />} />
      <Route path="/account/:id" element={<Account />} />
    </Routes>
  );
}

export default App;
