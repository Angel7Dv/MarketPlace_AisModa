import Footer from "./components/Footer";
import Navbar from "./routes/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import Rout from "./routes/Rout";

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
