import { createBrowserRouter } from "react-router-dom";
import HomePage from  "../pages/home"
import Products from "../pages/products";
export const routes = createBrowserRouter([
    {
        path:"/",
        element: <Products/>
    }
])