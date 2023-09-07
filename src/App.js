
import GetTimeZone from './WorldApi/GetTimeZone';
import WorldApiGrid from './WorldApi/WorldApiGrid';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WorldApiGrid />} />
        <Route path="/:area/:timezone" element={<GetTimeZone />} />
      </Routes>
    </div>
  );
}

export default App;
