import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import MyPage from './pages/MyPage/MyPage';
import Register from './pages/Register/register';
import Write from './pages/Write/write';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Write />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
