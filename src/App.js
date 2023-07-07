import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNav from "./components/MyNav";
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <div className="bg-black">
      <HeroSection />
    </div>
  );
}

export default App;
