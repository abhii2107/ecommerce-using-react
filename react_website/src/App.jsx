import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./components/AppLayout"
import { ErrorPage } from "./pages/ErrorPage"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Product } from "./pages/Product"
import { Singleproduct } from "./pages/SingleProduct"
import "./App.css"
import { Cart } from "./pages/Cart"

const router = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "product",
        element: <Product/>
      },
      {
        path: "singleproduct/:id",
        element: <Singleproduct/>
      },
      {
        path: "cart",
        element: <Cart/>
      },

      
   
    ]
  }


])







const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App