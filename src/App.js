import './App.css';
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/pages/Home';
import Blog from './Components/pages/Blog';
import Resume from './Components/pages/Resume';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
