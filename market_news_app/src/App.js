import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;