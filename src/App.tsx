import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./router/ProtectedRoutes";
import { Dashboard } from "./components/component-dashboard/component.dashboard";
import { PathNotFound } from "./components/component-error/component-path-error";
import Signin from "./components/component-signin/component-signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<PathNotFound />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
