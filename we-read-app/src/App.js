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
import Searching from './components/searching/searching';
import StickyFooter from './components/stickyFooter/StickyFooter';

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
    path: "/Reading/:fictionID/:chapterID",
    main: () => <Reading />
  },
  {
    path: "/Profile",
    main: () => <Profile />
  },
  {
    path: "/Searching",
    exact: true,
    main: () => <Searching />,
    // render: 
  }
  // ,
  // {
  //   path: "/Searching/:fictionName",
  //   exact: true,
  //   main: (props) => <Searching  {...props} />
  // }
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
        <StickyFooter />
      </div>
    </Router>
  );
}

export default App;
