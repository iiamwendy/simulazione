import * as React {useState,useEffect} from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import axios from'axios';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   < ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
  </React.StrictMode>
);