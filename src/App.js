
import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import {BrowserRouter as Router, Switch, Route,Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
    <Route exact path='/' element={<><Banner/><Movies/></>}/>
    <Route exact path='/favourite' element={<Favourite/>}/>

    </Routes>
    </Router>
    </>
  
  );
}

export default App;
