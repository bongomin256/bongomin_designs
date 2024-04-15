import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePages from "./pages/HomePages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePages />} />
    </Route>
  )
);

// import MainLayout from "./layouts/MainLayout";
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
