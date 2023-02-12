import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Banner from './components/Home/Banner/Banner';
import Categories from './components/Home/Categories/Categories';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/banner' element={<Banner />} />
          <Route path='/categoris' element={<Categories />} />
          <Route path='/about' element={<AboutUs />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
