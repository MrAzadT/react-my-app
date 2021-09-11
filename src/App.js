import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header property="Azad T" />

        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
