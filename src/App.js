import Home from './Components/home/home-component';
import {Routes, Route } from 'react-router-dom';
import SignIn from './Components/sign-in/sign-in-component';
import './App.css';
import Nav from './Components/home/nav/nav-component';

const App = ()=> {


  return (
    <Routes>
      <Route path="/" element={<Nav />}>
      <Route path="home" element={<Home />} />
      <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
