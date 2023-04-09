import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Signup from './signup';
import Login from './login';
import Errorpage from './errorpage';
import Navbar from './component/navbar';
import Writingpage from './writingpage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/writing' element={<Writingpage />}></Route>
        <Route exact path='*' element={<Errorpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
