import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Books from './Components/Books/Books';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ height: '100vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
