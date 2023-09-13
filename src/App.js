import Header from "./Components/header/header/Header"
import Main from "./Components/main/Main.js";
import Footer from "./Components/footer/Footer";
import socketIO from ' socket.io-client';
import './App.css';

const socket = socketIO.connect('http://localhost:4000');


function App() {

  
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
