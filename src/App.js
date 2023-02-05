import './App.css';
import Header from './Pages/Shared/Header/Header';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
