import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminView from "./views/admin";
import UserView from "./views/user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/consumer" element={<UserView />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
