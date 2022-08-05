import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import User from './Pages/User'

function App() {
  return (
    <div className="App">
    <Header/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/User" element={<User/>} />
    </Routes>
    <Footer/>
  </div>
  );
}



export default App;
