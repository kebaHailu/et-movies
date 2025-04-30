import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "./components";
function App() {
  return (
    <div className="App dark:bg-slate-800">
      <BrowserRouter>
      <ScrollToTop/>
        <Header />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
