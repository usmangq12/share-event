import { Routes } from "./Routes";
import "./App.css";
import { EventForm } from "./components/EventForm";

function App() {
  return (
    <div class="container mx-auto">
      <Routes />
      <EventForm />
    </div>
  );
}

export default App;
