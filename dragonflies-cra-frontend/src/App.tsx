import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home/Home';
import Dragonflies from './pages/Dragonflies/Dragonflies';
import './App.scss';
import DragonfliesProvider from './context/DragonfliesProvider';
import DragonflyDetails from './pages/DragonflyDetails/DragonflyDetails';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import LoginPage from './pages/Login/LoginPage';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header />
      <DragonfliesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dragonflies" element={<Dragonflies />} />
        <Route path="/dragonflies/:id" element={<DragonflyDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </DragonfliesProvider>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
