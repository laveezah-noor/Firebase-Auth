import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch, Link, 
  Route, useRouteMatch, useParams, useHistory} from 'react-router-dom'
import Login from './Login'
import Signin from './Signin';
import Landing from './Landing';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/'} exact>
            <LandingPage/>
          </Route>
          <Route path={'/login'} component={Login}/>
          <Route path={'/register'} component={Signin}/>
          <Route path={'/home'} component={Landing}/>
        </Switch>
      </Router>
    </div>
  );
}


function LandingPage() {
  return (
    <div>
      <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                React App with FireBase Authentication
              </p>
              <Link
                className="App-link"
                to={'/login'}
                // href="https://reactjs.org"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                Login
              </Link>
            </header>
    </div>
  )
}


export default App;
