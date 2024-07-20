import {BrowserRouter as Router,Route,Switch }from "react-router-dom"
import Home from "./Home/Home";
import AboutMain from "./About/AboutMain";
import ContactUs from "./Contact/Contact";
import Service from "./Services/Service";
import BarberUs from "./Services/ServiceFodder/Barber";
import Saloon from "./Services/ServiceFodder/Saloon";
import MassageUs from "./Services/ServiceFodder/MassageUs";
import BarberFormUs from "./Services/ServiceFodder/BarberFormUs";
import NavbarUs from "./Component/Navbar";



function App() {
  return (
    <div className="App">
      <Router><NavbarUs/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/about"><AboutMain/></Route>
          <Route path='/contact'><ContactUs/></Route>
          <Route path="/service"><Service/></Route>
          <Route path='/barber'><BarberUs/></Route>
          <Route path='/salon'><Saloon/></Route>
          <Route path='/massage'><MassageUs/></Route>
          <Route path='/form'><BarberFormUs/></Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
