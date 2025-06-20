import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/HomePage";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/orders",
            element: <h1>Orders</h1>
        },
        {
            path: "/about",
            element: <h1>About</h1>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/cart",
          element: <CartPage/>
        },
        {
          path: "/checkout",
          element: <CheckoutPage/>
        }
      ]
    },
  ]);

  export default router;