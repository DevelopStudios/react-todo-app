import logo from "./logo.svg";
import "./App.css";
import Banner from "./Banner/Banner";
import Background from "././images/bg-desktop-dark.jpg";
import Backgroundlight from "././images/bg-desktop-light.jpg";
import Backgroundmobiledark from "././images/bg-mobile-dark.jpg";
import Backgroundmobilelight from "././images/bg-mobile-light.jpg";
function App() {
  let backgrounds = [
    Background,
    Backgroundlight,
    Backgroundmobiledark,
    Backgroundmobilelight,
  ];
  let pickedBackground = backgrounds[1];
  return (
    <div className="app-container">
      <Banner background={pickedBackground}/>
    </div>
  );
}

export default App;

