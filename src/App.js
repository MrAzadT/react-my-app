import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header property="abid azad" />
      <Contact name="azad" gmail="mrazadt@gmail.com" phone="222-222-222" />
      <Contact name="rakon" gmail="rakib@gmail.com" phone="000-000 -222" />
      <Contact name="anha" gmail="anha@gmail.com" phone="333-555-222" />
    </div>
  );
}

export default App;
