import Articles from "../components/articles/Articles";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/common/notFound/NotFound";
import GeneralLayout from "../layout/generalLayout/GeneralLayout";
import Index from "../components/index/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/articulos",
        element: <Articles />,
      },
    ],
  },
]);
