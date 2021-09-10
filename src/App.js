import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header property="abid azad Tamal" />

      <div className="container">
        <Contact name="Azad" gmail="mrazadt@gmail.com" phone="222-222-222" />
        <Contact name="Rakon" gmail="rakib@gmail.com" phone="000-000-777" />
        <Contact name="Anha" gmail="anha@gmail.com" phone="333-555-000" />
      </div>
    </div>
  );
}

export default App;
