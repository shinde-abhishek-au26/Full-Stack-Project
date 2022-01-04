import Navbar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import { Routes ,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Main from './components/Main'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path = "/" element={<Home/>}/>
          <Route exact path = "/login" element={<Login/>}/>
          <Route exact path = "/signup" element={<Signup/>}/>
          <Route exact path = "/notes" element={<Main/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
