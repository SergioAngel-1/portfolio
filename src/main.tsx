import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Asegurarse de que el tema oscuro se aplique al cargar
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (isDark) {
  document.documentElement.classList.add("dark");
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
