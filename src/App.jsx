import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <main className="main">
      <Navbar />
      <ItemListContainer greetings="Bienvenidos al Himalaya!" />
    </main>
  );
}

export default App;