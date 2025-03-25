import  {RouterProvider} from "react-router-dom";
import { router } from "./routes/router.jsx";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Import ReactDOM for rendering
//import App from './App.jsx'; 

 

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router ={router}/>
 
   
   </StrictMode>
);
