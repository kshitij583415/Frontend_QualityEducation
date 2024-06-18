import React from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import "./styles/font.css";
import "./styles/index.css";
import "./styles/tailwind.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>);
