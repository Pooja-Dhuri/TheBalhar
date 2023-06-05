import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Sale from './Pages/Sale';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/sale'element={<Sale/>}/>
           <Route path='/signup' element={<SignUp/>}/>
           <Route path="/signin" element={<SignIn/>}/>
           <Route path='/contactus' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
