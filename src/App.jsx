import './App.scss';
import ControlRoom from './ControlRoom/ControlRoom';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/controlroom" component={ControlRoom} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
