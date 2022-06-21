import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Landing from "../../screens/Landing/Landing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/play" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
