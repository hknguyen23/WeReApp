import './App.css';
import Uploading from './components/uploading/uploading'
import Detail from './components/detail/detail';
import Profile from "./components/profile/profile";
function App() {
  return (
    <div className="App">
      <Uploading/>
      <Detail />
      <Profile />
    </div>
  );
}

export default App;
