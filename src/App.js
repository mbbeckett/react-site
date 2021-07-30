import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
