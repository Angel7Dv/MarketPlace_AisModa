import Footer from "./components/Footer";
import Navbar from "./route/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import Rout from "./route/Rout";

function App() {
  return (
    <>
      <Router>

        <Navbar />
        <Rout />

        <Footer />
      </Router>
    </>
  );
}

export default App;
