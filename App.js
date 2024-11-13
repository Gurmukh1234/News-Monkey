import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  let pageSize = 10;

  // apikey = process.env.REACT_APP_NEWS_API;
  let apikey = "d9095c1838b241f59e453b1d93dcd9b7";

  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apikey={apikey}
                key="general"
                country="us"
                category="general"
              />
            }
          ></Route>

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apikey={apikey}
                key="business"
                country="us"
                category="business"
              />
            }
          ></Route>

          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apikey={apikey}
                key="entertainment"
                country="us"
                category="entertainment"
              />
            }
          ></Route>

          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apikey={apikey}
                key="general"
                country="us"
                category="general"
              />
            }
          ></Route>

          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apikey={apikey}
                key="health"
                country="us"
                category="health"
              />
            }
          ></Route>

          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apikey={apikey}
                key="science"
                country="us"
                category="science"
              />
            }
          ></Route>

          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apikey={apikey}
                key="technology"
                country="us"
                category="technology"
              />
            }
          ></Route>

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apikey={apikey}
                key="sports"
                country="us"
                category="sports"
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
