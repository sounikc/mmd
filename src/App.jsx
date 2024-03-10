import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  NavbarComponent  from './components/NavbarComponent';
import Home from './components/Home';
import About from './components/About';
import Reviews from './components/Reviews';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import WishList from './components/WishList';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter>
    <div className="App">
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='reviews' element={<Reviews/>}/>
        <Route path='wishlist' element={<WishList/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
