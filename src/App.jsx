import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,} from "react-router-dom";
import Rootlayout from "./components/RootLayout";
import {Home}  from "./pages/Home";
import Pagesx from "./pages/Pagesx";
import Shop from "./pages/Shop";
import ShopList from "./pages/ShopList";
import ProductsD from "./pages/ProductsD";
import ProductDetails from "./pages/ProductDetails";
import Addtocart from "./pages/Addtocart";


function App() {
    let router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Rootlayout />}>
            <Route index path="/" element={<Home />}></Route>
            <Route index path="/shop" element={<Shop />}></Route>
            <Route index path="/Pagesx" element={<Pagesx />}></Route>
            <Route index path="/ShopList" element={<ShopList/>}></Route>
            <Route index path="/ProductsD" element={<ProductsD/>}></Route>
            <Route index path="/ProductDetails" element={<ProductDetails/>}></Route>
            <Route index path="/Addtocart" element={<Addtocart/>}></Route>
            <Route path="/shop/:id" element={<ProductDetails/>}/>
          </Route>
        )
      );

      return (
        <>  <RouterProvider router={router} /></>
      )
}
export default App