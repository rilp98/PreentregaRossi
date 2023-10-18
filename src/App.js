import "./App.css";
import "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting="Hello, Sir" />
    </div>
  );
}
export default App;
