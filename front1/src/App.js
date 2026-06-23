import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';
import Cart from './components/Cart';



function App() {
  return (
   <Router>
    <Routes>

           <Route path="/" element={<Main/>} />

           <Route path="/Navbar" element={<Navbar/>}/>

           <Route path="/Products" element={<Products/>} />   

           <Route path="/SignIn" element={ <SignIn/> } />   
           <Route path="/SignUp" element={ <SignUp/> } />   
           <Route path="/Cart" element={ <Cart /> } />   

    </Routes>
   </Router>
  );
}

export default App;
