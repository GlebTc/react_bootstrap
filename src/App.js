import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


// Containers
import Home from "./containers/Home"
import NavigationBar from "./containers/NavigationBar"
import Alerts from "./containers/Alerts"



function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/alerts" element={<Alerts />} />
      </Routes>
    </Router>
  );
}

export default App;
