
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUS from './pages/AboutUS/AboutUS';
import Blog from './pages/blog/Blog';
import ContactUS from './pages/ContactUS/ContactUS';
import Header from './components/Header';

function App() {
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUS/>}   />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contactus' element={<ContactUS/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
