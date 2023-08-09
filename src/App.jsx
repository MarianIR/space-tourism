import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
