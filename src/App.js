import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import Result from './components/Result';
import NotFound from './components/NotFound';
import GamificationProvider from './context/GamificationContext';
import Header from './components/Header';

function App() {
  return (
    <GamificationProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/quiz/:quizId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </GamificationProvider>
  );
}

export default App;