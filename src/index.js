import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const appRoot = document.getElementById("root");
const root = createRoot(appRoot);

const render = Component => {
  root.render(
    <Component />
  )
}
render(App)