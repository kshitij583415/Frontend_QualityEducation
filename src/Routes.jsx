import LogIn from "modals/LogIn";
import SignUp from "modals/SignUp";
import Allmentors from "pages/Allmentors";
import EduviCourses from "pages/EduviCourses";
import EduviCoursesDetails from "pages/EduviCoursesDetails";
import EduviCoursesPricing from "pages/EduviCoursesPricing";
import EduviJoinAsTeacher from "pages/EduviJoinAsTeacher";
import EduviShop from "pages/EduviShop";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Singlementordetails from "pages/Singlementordetails";
import { useRoutes } from "react-router-dom";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    {
      path: "login",
      element: <LogIn />
    },
    {
      path: "signup",
      element: <SignUp />
    },
    { path: "*", element: <NotFound /> },

    {
      path: "/",
      element: <EduviCoursesDetails />,
    },
    {
      path: "eduvishop",
      element: <EduviShop />,
    },
    {
      path: "eduvicourses",
      element: <EduviCourses />,
    },
    {
      path: "eduvicoursespricing",
      element: <EduviCoursesPricing />,
    },
    {
      path: "eduvijoinasteacher",
      element: <EduviJoinAsTeacher />,
    },
    {
      path: "allmentors",
      element: <Allmentors />,
    },
    {
      path: "singlementordetails",
      element: <Singlementordetails />,
    },
    // {
    //   path: "signup",
    //   element: <Si
    // }


  ]);

  return element;
};

export default ProjectRoutes;
