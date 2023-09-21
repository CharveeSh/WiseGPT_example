import './App.css';
import NowPlaying from './pages/NowPlaying';
import Login from './pages/Login';
import Create from './pages/Create';

function App() {

  return (
    <div className="App">
      <NowPlaying />
      <Login />
      <div>
        <Create />
      </div>
    </div>
  );
}

export default App;
