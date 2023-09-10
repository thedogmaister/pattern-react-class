// import logo from "./logo.svg";
// import log2 from "assets/logo192.png";
import "./App.css";
import { ConditionalRendering } from "./components/conditionalRenderingDesignPattern/ConditionalRendering";
import ObservablesMain from "./components/reactivex";
// import { ShopingCard } from "./components/CompundComponet_controlProps_pattern/pages/ShopingCard";

function App() {
  return (
    <div className="App">
      {/* <ComponetANew></ComponetANew>
      <ComponetBNew></ComponetBNew> */}
      {/* <ShopingCard /> */}
      {/* <ConditionalRendering /> */}
      <ObservablesMain />
    </div>
  );
}

export default App;
