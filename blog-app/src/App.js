import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/' element={user ? <Home /> : <Login />} />
        <Route path='/register/' element={user ? <Home /> : <Register />} />
        <Route path='/write/' element={user ? <Write /> : <Register />} />
        <Route path='/settings/' element={user ? <Settings /> : <Register />} />
        <Route path='/post/:postId' element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
