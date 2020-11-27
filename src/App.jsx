import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
