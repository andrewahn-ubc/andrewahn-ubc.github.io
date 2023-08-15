import './App.css';
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/pages/Home';
import SignUp from './Components/pages/SignUp';
import Products from './Components/pages/Products';
import Services from './Components/pages/Services';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
