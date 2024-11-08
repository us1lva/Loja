import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link } from "react-router-dom";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)