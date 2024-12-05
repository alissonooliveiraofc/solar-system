import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

function App() {
  return (
    <>
      <Header />
      {/* <div className="line" /> */}
      <SolarSystem />
      <Missions />
    </>
  );
}

export default App;
