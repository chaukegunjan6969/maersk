import { Link, NavLink, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";
import Product from "./Components/Product";
import Main from "./Components/Main";
import Header from "./maincomponent/Header";
import Footer from "./maincomponent/Footer";


function App() {
  return (
    <div  class="m-0 p-0 bg-slate-400">
  
  
      <div  >
         <Header></Header>

      </div>

     
     
     
      
      {/* <div>
      <nav className="bg-">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/product">Products</NavLink>
          </li>
        </ul>
      </nav>
      </div> */}

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        //default route
        <Route index element={<HomePage />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
