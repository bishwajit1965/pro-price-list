import "./App.css";
import DashBoard from "./components/dashBoard/DashBoard";
import DynamicNavBar from "./components/dynamicNavBar/DynamicNavBar";
import PhoneBar from "./components/phoneBar/PhoneBar";
import PriceList from "./components/priceList/PriceList";

function App() {
  return (
    <div className="App">
      <DynamicNavBar />
      <PriceList />
      <DashBoard />
      <PhoneBar />
    </div>
  );
}

export default App;
