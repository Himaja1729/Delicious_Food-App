
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './screen/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './screen/Login';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"

function App() {
  return (
    <Router>
    <div > 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
