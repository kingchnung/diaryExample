
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary'
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      {/*src= {'emtion1, 2, 3, 4, 5의 경로값'} */}
      {/* <img src={getEmotionImgById(1)} alt='붸뤼 긋' />  
      <img src={getEmotionImgById(2)} alt='긋' />
      <img src={getEmotionImgById(3)} alt='쏘쏘' />
      <img src={getEmotionImgById(4)} alt='배드' />
      <img src={getEmotionImgById(5)} alt='디스거스팅' /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
