import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages/Pages";
function App() {
  return (
    <Router>
      <div>
        <Pages />
      </div>
    </Router>
  );
}

export default App;
