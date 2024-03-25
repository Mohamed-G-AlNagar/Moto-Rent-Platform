import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Auth/Register/Register";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import ForgetPassword from "./pages/Auth/ForgetPassword/ForgetPassword";
import CarCard from "./components/CarCard/CarCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Cars from "./pages/Cars/Cars";
import Profile from "./pages/Profile/Profile";
import UserProfileDetailsForm from "./components/userProfileDetailsForm/UserProfileDetailsForm"
import { RentedCars } from "./components/RentedCars/RentedCars";
import UserSendMessageForm from "./components/sendMessagesForm/SendMessagesForm";
import RecviedMessagesUser from "./components/RecviedMessagesUser/RecviedMessagesUser";
import PersistentDrawerLeft from "./components/Test/Test";
import CarDetails from "./pages/CarDetails/CarDetails";
import RentalSummary from "./components/FormSummaryRental/FormSummaryRental";
import Wishlist from "./pages/Wishlist/Wishlist";
import RentalInfo from "./pages/RentalInfo/RentalInfo";
import UpdatePassword from "./pages/Auth/UpdatePassword/UpdatePassword"
import PaymentRes from "./pages/PaymentRes/PaymentRes";
import LayOut from "./pages/LayOut/LayOut";
import PaymentFail from "./pages/PaymentRes/PaymentFail";
import VerifyEmail from "./pages/Auth/VerifyEmail/VerifyEmail";
import NotFound from "./pages/NotFound/NotFound"
import { CarHistoryWrapper } from "./components/CarHistoryWrapper/CarHistoryWrapper";

const rental = {
  name: 'Nissan GT-R',
  reviewer: 440,
  image: "car1",
  price: {
    subtotal: 80,
    tax: 0,
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Home />
    ),
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "verifyEmail/:verifyToken",
    element: <VerifyEmail />,
  },
  {
    path: "card",
    element: <CarCard />,
  },
  {
    path: "forgotpassword",
    element: <ForgetPassword />,
  },
  {
    path: "resetPassword/:code",
    element: <ResetPassword />,
  },
  {
    path : "cars",
    element : 
        <Cars />
  },
  {
    path : "profile",
    element : (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    )
  },
   {
     path : "user",
     element :<ProtectedRoute><PersistentDrawerLeft/></ProtectedRoute>,children:[
      {path:""
      ,element:<UserProfileDetailsForm/>
    },
    {path:"profiledetalis"
    ,element:<UserProfileDetailsForm/>
    },
    {
      path : "updatepassword",
      element : <UpdatePassword />
    },
    {path:"history",
    element:<CarHistoryWrapper />
    },
    {
      path:"wishlist",
      element:<Wishlist></Wishlist>
    },
    {path:"collection",
    element:<RentedCars/>
    
  },
  {path:"sendmessage"
    ,element:<UserSendMessageForm/>
  },
  {
    path:"recviedmessage",
    element:<RecviedMessagesUser/>
  }

     ] },
    
  {
    path:"test",
    element:<PersistentDrawerLeft/>
  },
  {
    path:'carDetails',
    element:<CarDetails></CarDetails>
  },{
    path:"rental",
    element:<RentalSummary rental={rental}></RentalSummary>
  },
  {
    path : "rentalInfo",
    element : <LayOut /> , children : [
      {
        index : true,
        element : <ProtectedRoute><RentalInfo /></ProtectedRoute>
      },
      {
        path : "payRes/:rentId",
        element : <ProtectedRoute><PaymentRes /></ProtectedRoute>
      },
      {
        path : "payFail/:rentId",
        element : <ProtectedRoute><PaymentFail /></ProtectedRoute>
      }
    ]
  }, {
    path : "*",
    element :<NotFound />
  }
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "var(--color-grey-700)",
          },
        }}
      />
      <RouterProvider router={router}></RouterProvider>;
    </QueryClientProvider>
  );
}

export default App;
