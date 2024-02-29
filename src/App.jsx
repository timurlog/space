import Navbar from "./components/Navbar/Navbar";
import "./App.css";

export default function App() {
  return (
    <div className="App h-screen w-full">
      <Navbar activePage={"home"} />
    </div>
  );
}
