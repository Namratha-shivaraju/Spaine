import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Workout from './components/Workout/Workout';
import Goals from './components/Goals/Goals';
import Profile from './components/Profile/Profile';

function App() {
  let component
  switch (window.location.pathname) {
    case "/Spaine/":
      component = <Home />
      break
    case "/home":
      component = <Home />
      break
    case "/workout":
      component = <Workout />
      break
    case "/goals":
      component = <Goals />
      break
    case "/profile":
      component = <Profile />
      break
    default:
  }
  return (
    <>
    <NavBar />
    <main className='main'>
      {component}
    </main>
    </>
  );
}

export default App;