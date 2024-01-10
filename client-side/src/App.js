import './App.css';
import Login from './components/login';
import Choose from './components/choose';
import Send from './components/send';
import Accept from './components/accept';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Peer from 'peerjs'

function App() {
  return (
    <div className="Home">
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/choose" element = {<Choose/>}/>
        <Route path = "/send" element = {<Send/>}/>
        <Route path = "/accept" element = {<Accept/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
