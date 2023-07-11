import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Sale from './Pages/Sale';
import Contact from './Pages/Contact';
import SingleSale from './Pages/SingleSale';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/sale'element={<Sale/>}/>
           <Route path="singlesale/:id" element={<SingleSale/>}/>
           <Route path='/signup' element={<SignUp/>}/>
           <Route path="/signin" element={<SignIn/>}/>
           <Route path='/contactus' element={<Contact/>}/>
           <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
