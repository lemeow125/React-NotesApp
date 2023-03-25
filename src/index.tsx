import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Routes/Home/Home";
import NewNote from "./Routes/NewNote/NewNote";
import Login from "./Routes/Login/Login";
import Activation from "./Routes/Activation/Activation";
import Register from "./Routes/Register/Register";
import UserPage from "./Routes/UserPage/UserPage";
import ViewEditNote from "./Routes/ViewEditNote/ViewEditNote";

import { QueryClient, QueryClientProvider } from "react-query";

import { Provider } from "react-redux";
import Store from "./Features/Redux/Store/Store";

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/NewNote",
    element: <NewNote />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Activation/:uid/:token",
    element: <Activation />,
  },
  {
    path: "/Note/:id",
    element: <ViewEditNote />,
  },
  {
    path: "/User",
    element: <UserPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={Store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
