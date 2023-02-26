import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Workout from './components/Workout/Workout';
import Goals from './components/Goals/Goals';
import Profile from './components/Profile/Profile';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/Spaine/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);