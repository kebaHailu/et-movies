import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "./components";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
