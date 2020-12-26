import './App.css';

import Home from './components/home/home';
import Uploading from './components/uploading/uploading';
import Detail from './components/detail/detail';
import Profile from "./components/profile/profile";
import Reading from './components/reading/reading';

function App() {
  return (
    <div className="App">
      <Home />
      <Uploading/>
      <Detail />
      <Profile />
      <Reading/>
    </div>
  );
}

export default App;
