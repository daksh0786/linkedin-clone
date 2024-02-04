import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Route>
        <Switch>
          <Router exact path = "/">

          </Router>
        </Switch>
      </Route>
    </div>
  );
}

export default App;
