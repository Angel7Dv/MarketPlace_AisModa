import Footer from "./components/Footer";
import Navbar from "./route/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalRoutes from "./route/GlobalRoutes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <GlobalRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
