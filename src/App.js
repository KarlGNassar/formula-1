import "./App.css";
import ConstructorsChart from "./components/ConstructorsChart";
import DriversChart from "./components/DriversChart";
import PodiumChart from "./components/PodiumChart";

import QualiChart from "./components/QualiChart";

function App() {
  return (
    <div className="app">
      <div className="app__topChart">
        <div className="app__topChart--left">
          <div className="app__topChart--leftTitle--container">
            <h1 className="app__topChart--leftTitle--title">
              Formula 1 - Sir Lewis Hamilton
            </h1>
            <h4 className="app__topChart--leftTitle--subtitle">2021 Season</h4>
            <p className="app__topChart--leftTitle--description">
              Podium battle between MAX Verstappen and LEWIS Hamilton
            </p>
          </div>
        </div>
        <div className="app__topChart--right">
          <PodiumChart />
        </div>
      </div>
      <div className="app__bottomCharts">
        <div className="app__bottomChart--left">
          <h1 className="app__bottomChart--left--description">
            Qualis Podiums
          </h1>
          <QualiChart />
        </div>
        <div className="app__bottomChart--center">
          <h1 className="app__bottomChart--left--description">Constrcutors</h1>
          <ConstructorsChart />
        </div>
        <div className="app__bottomChart--right">
          <h1 className="app__bottomChart--left--description">Drivers</h1>
          <DriversChart />
        </div>
      </div>
    </div>
  );
}

export default App;
