import RettyPage from "./pages/RettyPage";
import LayoutRetty from "./layout/LayoutRetty";
import { Routes, Route } from "react-router-dom"
import { RettyProvider } from "./context/rettyContext";
import { setupServer } from "./fakeApi/apiRetty";

const App = () => {
  if (process.env.NODE_ENV === "development") {
    setupServer();
  }
  return (
    <RettyProvider>
      <Routes>
        <Route element={<LayoutRetty />}>
          <Route path="/" element={<RettyPage />}></Route>
        </Route>
      </Routes>
    </RettyProvider>
  );
};

export default App;