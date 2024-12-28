import { createBrowserRouter } from "react-router-dom";
import HomePage from  "../pages/home"


import Product from "../pages/product";
import Products from "../pages/products";
import Reviews from "../components/outlet/productOutlet/reviewsOutlet";
import DetailsOutlet from "../components/outlet/productOutlet/detailsOutlet";
export const routes = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>

    },
    {
        path:"/product",
        element: <Product/>,
        children: [
            {
              path: "",
              element: <DetailsOutlet />,
            },
            {
              path: "reviews",
              element: <Reviews />,
            }
          ],
    }
])