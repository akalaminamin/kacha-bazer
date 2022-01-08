import NavBar from "./Shared/NavBar/NavBar";
import "./styled/App.css";
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import initializeFirebase from "./Pages/Firebase/Firebase.init";

initializeFirebase();

function App() {
  return (
    <>
      <NavBar />
      <Home />

    <Login></Login>

    </>
  );
}

export default App;
