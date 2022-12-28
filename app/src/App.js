import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/Login/login';
import MyPage from './pages/mypage/MyPage';
import Register from './pages/Register/register';
import Account from './pages/account/Account';
import NotFound from './pages/notfound/NotFound';
import Write from './pages/Write/write';
import Board from './pages/borad/Board';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/write" element={<Write />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
}

export default App;
