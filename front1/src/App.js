import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Products from "./components/Products";


function App() {
  return (
   <Router>
    <Routes>
         <Route path="/" element={<Main/>} />

           <Route path="/Navbar" element={<Navbar/>}/>

          <Route path="Products" element={<Products/>} />   

    </Routes>
   </Router>
  );
}

export default App;
