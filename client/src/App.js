////// visit to copy documentation from reactrouter.com
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

//made to define sequential structure of components on the page
const Layout = () => {                         //Step3
 return( <div className="app" >
    <Navbar/>
    <Outlet/>        
    <Footer/>
  </div>
 )
}

/* EARLIER before defining Layout function (format given as per documentation)
const router = createBrowserRouter([
      {
        path: "/",
        element: <Home/>,
      },
    
      {
        path: "/products/:id",
        element: <Products/>,
      },
    
      {
        path: "/product/:id",
        element: <Product/>,
      },
]); */


/// LATER after defining Layout function
const router = createBrowserRouter([                   //Step2
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    
      {
        path: "/products/:id",
        element: <Products/>,
      },
    
      {
        path: "/product/:id",
        element: <Product/>,
      },
    ]
  },
]);
///

/////

function App() {
  return (
    <RouterProvider router={router} /> //source: reactrouter.com   Step1
  );
}

export default App;
