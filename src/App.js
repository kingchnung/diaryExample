
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary'
import Edit from './pages/Edit';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import EmotionItem from './component/EmotionItem';

const day = new Date();
day.setDate(day.getDate() - 1);
const mockData = [

  {

    id: "0",

    date: day.getTime(),

    content: "0, 오늘은 아침부터 날씨가 무척 맑았다. 출근길에 들른 카페에서 마신 아이스 아메리카노가 유난히 맛있었다. 업무는 평소보다 수월하게 끝났고, 퇴근 후에는 오랜만에 공원 산책을 했다. 바람이 선선해서 기분이 좋았다. 이런 평범한 하루가 참 감사하게 느껴진다.",

    emotionId: 1,

  },

  {

    id: "1",

    date: new Date(day).setDate(day.getDate() - 1),

    content: "1, 오늘 책에서 행복은 선택이다라는 문장을 읽었다. 순간 멈춰서 생각하게 됐다. 나는 얼마나 행복을 선택하고 있는가? 불평보다 감사에 집중하려고 노력해야겠다. 작은 습관 하나가 삶을 바꿀 수 있다는 걸 다시 느낀 하루였다.",

    emotionId: 2,

  },

  {

    id: "2",

    date: new Date(day).setDate(day.getDate() - 2),

    content: "2, 오늘은 마음이 참 평온했다. 특별한 일이 있었던 건 아니지만, 모든 게 자연스럽게 흘러가는 느낌이었다. 이런 날이 자주 있었으면 좋겠다. 평범함 속에서 감사할 수 있는 마음을 잊지 말자. 나 자신에게도 고맙다고 말해주고 싶다.",

    emotionId: 3,

  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      return [action.data, ...state];
    }
    case 'UPDATE': {
      return state.map((it) => String(it.id) === String(action.data.id) ? { ...action.data } : it);
    }
    case 'DELETE': {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(3);

  useEffect(() => {
    dispatch({
      type: 'INIT',
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId
      }
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(data).getTime(),
        content,
        emotionId
      }
    })
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    })
  };

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다...</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
