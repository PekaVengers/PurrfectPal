import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register, { action as registerAction } from "./pages/Register";
import Login, { action as loginAction } from "./pages/Login";
import Profile, {loader as profileLoader} from "./pages/Profile";
import AddPet, {action as petAction} from "./pages/AddPet";
import Petfolio from "./pages/Petfolio";
import Error from "./pages/Error";
import PetsList from "./pages/PetsList";
import { AuthProvider } from "./contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import OpenAdopt, {action as openAdoptAction} from "./pages/OpenAdopt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        action: registerAction,
        path: "register",
        element: <Register />,
      },
      {
        action: loginAction,
        path: "login",
        element: <Login />,
      },
      {
        loader: profileLoader,
        path: "profile",
        element: <Profile />,
      },
      {
        action: petAction,
        path: "add-pet",
        element: <AddPet />,
      },
      {
        path: "pets",
        element: <PetsList />,
      },
      {
        path: "pets/:petId",
        element: <Petfolio />,
      },
      {
        action: openAdoptAction,
        path: "open-adopt/:id",
        element: <OpenAdopt />,
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
