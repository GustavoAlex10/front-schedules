import Navbar from "./components/navbar";
import { BrowserRouter } from 'react-router-dom';

import Content from "./routes/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Content />
      </BrowserRouter>
    </div>
  );
}


export default App;
