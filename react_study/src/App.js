import './App.css';
import User from './component/User';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="container">
      <Navbar title="User App"></Navbar>
        
        <User
        name ="Furkan"
        salary="8000"
        department="Bilişim"
        ></User>
         <User
        name ="Palavan"
        salary="8000"
        department="Bilişim"
        ></User>
    </div>
  );
}

export default App;
