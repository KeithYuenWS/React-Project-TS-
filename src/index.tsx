import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Layout from './Layout';
import Home from './Home';
import App from './App';

import reportWebVitals from './reportWebVitals';

import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* // have problem to see the index html once build */}
      {/* // sue HashRouter as can fix */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="App" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
