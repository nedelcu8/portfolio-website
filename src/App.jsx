import Avatar from "./components/Avatar";
import portrait from "./assets/panoramic_view.jpeg";
import "./App.css";
import Info_Card from "./components/Info_Card";

function App() {
  return (
    <div className="container">
      <Avatar src={portrait} alt="My portrait" size={{width: 800, height: 400 }} />
      <Info_Card />
    </div>
  );
}
export default App;
