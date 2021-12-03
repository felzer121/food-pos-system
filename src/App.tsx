import React from 'react';
import Home from './page/Home';
import './style/App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";

const routes = [
    {id: 1, path: '/', name: 'Home', Component: Home}
]

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Sidebar />
              <div className="page">
                  <Routes>
                      {routes.map(({id, path, Component}) => (
                          <Route path={path} key={id} element={<Component />} />
                      ))}
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
