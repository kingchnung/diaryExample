
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary'
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
      {/* <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>새 일기</Link>
        <Link to={'/diary'}>읽기</Link>
        <Link to={'/edit'}>수정/삭제</Link>
      </div> */}
    </div>
  );
}

export default App;
