
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from "./components/Home/Home"
import {Menu} from "./components/Menu/Menu"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        {/* <Navbar/> */}
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/menu" element={<Menu/>} />
        </Routes>
      </BrowserRouter>
        
      
    </div>
  );
}

export default App;
