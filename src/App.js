import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Background from './components/background/Background';
import Gender from './components/onboarding/Gender';
import Start from './components/start/Start';
import Age from './components/onboarding/Age';
import WriteDiary from './components/writediary/WriteDiary';
import CheckDiary from './components/checkdiary/CheckDiary';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Background />} >
            <Route path='/' element={<Start />} />
            <Route path='/onboarding/gender' element={<Gender />} />
            <Route path='/onboarding/age' element={<Age />} />
            <Route path='/write' element={<WriteDiary />} />
            <Route path='/check' element={<CheckDiary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
