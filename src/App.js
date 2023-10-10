import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Chat-Feature/Client/Home';
import Header from "./Components/header/header/Header"
import Main from "./Components/main/Main.js";
import Footer from "./Components/footer/Footer";
import socketIO from 'socket.io-client';
import './App.css';
import Pop from './Components/header/popup/Pop';

const socket = socketIO.connect('http://localhost:4000');


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home socket={socket}/>}>
          </Route>
        </Routes>
          <Header/>
          <Main/>
          <Pop/>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
