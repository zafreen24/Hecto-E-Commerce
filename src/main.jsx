import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Components/pages/Home";
import Shop from "./Components/pages/Shop";
import Rootlayout from "./components/RootLayout";
import "./index.css";
import "slick-carousel/slick/slick.css";


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Rootlayout />}>
      <Route index path="/" element={<Home />}></Route>
      <Route index path="/shop" element={<Shop />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
