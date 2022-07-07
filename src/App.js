import Navbar from "./components/navbar";
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from "./contexts/Employee";

import Content from "./routes/routes";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Content />
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}


export default App;
