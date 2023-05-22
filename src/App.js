import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
