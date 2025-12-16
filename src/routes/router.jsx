import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import AllContest from "../pages/AllContest/AllContest";
import PrivateRoute from "./PrivateRoute";
import ContestCreate from "../pages/ContestCreate/ContestCreate";
import DashboardLayout from "../layouts/DashboardLayout";
import MyContests from "../pages/Dashboard/MyContest/MyContests";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/paymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: 'all-Contest',
          Component: AllContest,
        },
        {
          path: 'contest-create',
          element:<PrivateRoute><ContestCreate></ContestCreate></PrivateRoute>
        }

    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'my-contests',
        Component: MyContests,
      },
      {
        path: 'payment/:contestId',
        Component: Payment,
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess,
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancelled,
      }
    ]
  }
]);