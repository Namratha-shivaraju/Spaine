import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Workout from './components/Workout/Workout';
import Goals from './components/Goals/Goals';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
    <NavBar />
    <main className='main'>
      <Home />
      <Workout />
      <Goals />
      <Profile />
    </main>
    </>
  );
}

export default App;