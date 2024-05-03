import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loader from "./common/Loader";
import PageTitle from "./components/PageTitle";
import Dashboard from "./pages/Dashboard";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="ABridge To do app" />
              <Dashboard />
            </>
          }
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
