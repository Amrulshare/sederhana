import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Home from "./pages/Home";

function App() {
  const [loader, setLoader] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);
  return (
    <>
      {loader ? (
        <div id="loader">
          <HashLoader size={130} color="#36d7b7" speedMultiplier={2} />
        </div>
      ) : (
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      )}
    </>
  );
}

export default App;
