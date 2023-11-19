import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcoming } from "./pages/welcoming/welcoming";
import { Main } from "./pages/main/main";
import { Social } from "./pages/main/socialComponent/social";
import { Analytics } from "./pages/main/analyticsCompoent/analytics";
import { Generate } from "./pages/main/generateComponent/generate";
import { Checking } from "./pages/main/checking/checking";
import "./App.css";
import { MainWebPage } from "./pages/welcoming/main/main";
import { SyaqServices } from "./pages/welcoming/service/service";
import { About } from "./pages/welcoming/about/about";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcoming >
          <MainWebPage />
        </Welcoming >} />
        <Route path="/services" element={<Welcoming >
          <SyaqServices />
        </Welcoming >} />

        <Route path="/about" element={<Welcoming >
          <About />
        </Welcoming >} />
        <Route
          path="/syaq/social"
          element={
            <Main>
              <Social />
            </Main>
          }
        />

        <Route
          path="/words/analytics"
          element={
            <Main>
              <Analytics />
            </Main>
          }
        />

        <Route
          path="/generate/name"
          element={
            <Main>
              <Generate />
            </Main>
          }
        />

        <Route
          path="/words/checking"
          element={
            <Main>
              <Checking />
            </Main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
