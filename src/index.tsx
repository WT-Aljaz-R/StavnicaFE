import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Router, Routes} from "react-router-dom";
import LoginRoute from "./routes/LoginRoute";
import SignUpRoute from "./routes/SignUpRoute";
import DashboardRoute from "./routes/DashboardRoute";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginRoute />} />
            <Route path="/signup" element={<SignUpRoute />} />
            <Route path="/dashboard" element={<DashboardRoute />} />
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
