import logo from './logo.svg';
import './App.css';
// import Slider from './Team-project/Slider';
import About from './About';
import Footer from './Footer/Footer';
import Privacy from './Privacy/Privacy';
import TramCondetion from './TramCondetion/TramCondetion';
import ChackOut from './ChackOut/ChackOut';


function App() {
  return (
    <div className="App">
      
      <About></About>
      <Privacy></Privacy>
      <TramCondetion></TramCondetion>
      <ChackOut></ChackOut>
      <Footer></Footer>
    </div>
  );
}

export default App;
