import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register, { action as registerAction } from "./pages/Register";
import Login, { action as loginAction } from "./pages/Login";
import Profile, {loader as profileLoader} from "./pages/Profile";
import AddPet, {action as petAction} from "./pages/AddPet";
import Petfolio, {loader as petfolioLoader} from "./pages/Petfolio";
import Error from "./pages/Error";
import PetsList, {loader as petsLoader} from "./pages/PetsList";
import { AuthProvider } from "./contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import OpenAdopt, {action as openAdoptAction} from "./pages/OpenAdopt";
import PsychoQuiz from "./components/psycho_quiz/PsychoQuiz";
import Requests from "./components/profile/Requests";

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
        loader: petsLoader,
        path: "pets",
        element: <PetsList />,
      },
      {
        loader: petfolioLoader,
        path: "pets/:petId",
        element: <Petfolio />,
      },
      {
        action: openAdoptAction,
        path: "open-adopt/:id",
        element: <OpenAdopt />,
      },
      {
        path: 'quiz',
        element: <PsychoQuiz/>
      },
      {
        path: 'req',
        element: <Requests/>
      }
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
