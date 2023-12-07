import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import AboutClass from "./components/AboutClass";
import Error from "./components/Error";
import RestrauntCardById from "./components/RestrauntCardById";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import TestTask from "./components/TestTask";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
// import { Provider } from "react-redux";
import { Provider } from 'react-redux'
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));

const Footer = () => {
  return (
    <div>
      <p>Footer</p>
    </div>
  );
};

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName("Himanshu");
  }, []);
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          {/* <UserContext.Provider value={{loggedInUser: "Modi"}}> */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntCardById />,
      },
      {
        path: "/about",
        element: <AboutClass />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/testtask",
        element: <TestTask />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
