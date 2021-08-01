import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundError from './pages/NotFoundError';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/projects" component={ProjectsPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="*" component={NotFoundError}/>

      </Switch>
    </Router>
    </>
  );
}

export default App;
