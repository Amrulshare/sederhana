import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Dashboard from "./pages/Dashboard";
import { Formpages } from "./pages/Components";

function App() {
  const [loader, setLoader] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      {loader ? (
        <div id="loader">
          <HashLoader size={130} color="#36d7b7" speedMultiplier={2} />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/formpages" element={<Formpages />} />
        </Routes>
      )}
    </>
  );
}

export default App;
