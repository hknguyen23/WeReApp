import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/navBar/navBar';
import Home from './components/home/home';
import Uploading from './components/uploading/uploading';
import Detail from './components/detail/detail';
import Profile from "./components/profile/profile";
import Reading from './components/reading/reading';
import PrivateRoute from './components/PrivateRoute';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/Uploading",
    private: true,
    main: () => <Uploading />
  },
  {
    path: "/Detail/:fictionID",
    exact: true,
    private: false,
    main: (props) => <Detail fictionID={props.fictionID} />
  },
  {
    path: "/Reading/",
    main: () => <Reading />
  },
  {
    path: "/Profile",
    main: () => <Profile />
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          {routes.map((route, index) => {
            return (route.private ?
              <PrivateRoute
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
              :
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            )
          })}
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
