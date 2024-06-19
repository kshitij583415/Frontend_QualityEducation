// import LogIn from "modals/LogIn";
// import SignUp from "modals/SignUp";
// import Allmentors from "pages/Allmentors";
// import EduviCourses from "pages/EduviCourses";
// import EduviCoursesDetails from "pages/EduviCoursesDetails";
// import EduviJoinAsTeacher from "pages/EduviJoinAsTeacher";
// import EduviShop from "pages/EduviShop";
// import Home from "pages/Home";
// import NotFound from "pages/NotFound";
// import Singlementordetails from "pages/Singlementordetails";
// import CourseDet from "pages/curseDet";
// import MentorForm from "pages/mentorForm";
// import { useRoutes } from "react-router-dom";

// const ProjectRoutes = () => {
//   let element = useRoutes([
//     { path: "/", element: <Home /> },
//     {
//       path: "login",
//       element: <LogIn />,
//     },
//     {
//       path: "signup",
//       element: <SignUp />,
//     },
//     { path: "*", element: <NotFound /> },

//     {
//       path: "/coursesdetail",
//       element: <EduviCoursesDetails />,
//     },
//     {
//       path: "eduvishop",
//       element: <EduviShop />,
//     },
//     {
//       path: "eduvicourses",
//       element: <EduviCourses />,
//     },
//     {
//       path: "eduvijoinasteacher",
//       element: <EduviJoinAsTeacher />,
//     },
//     {
//       path: "allmentors",
//       element: <Allmentors />,
//     },
//     {
//       path: "singlementordetails/:id",
//       element: <Singlementordetails />,
//     },
//     {
//       path: "courseDet",
//       element: <CourseDet />,
//     },
//     {
//       path: "mentorForm",
//       element: <MentorForm />,
//     },

//   ]);

//   return element;
// };

// export default ProjectRoutes;

import Header from "components/Header";
import LogIn from "modals/LogIn";
import SignUp from "modals/SignUp";
import Allmentors from "pages/Allmentors";
import EduviCourses from "pages/EduviCourses";
import EduviCoursesDetails from "pages/EduviCoursesDetails";
import EduviJoinAsTeacher from "pages/EduviJoinAsTeacher";
import EduviShop from "pages/EduviShop";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Singlementordetails from "pages/Singlementordetails";
import CourseDet from "pages/curseDet";
import MentorForm from "pages/mentorForm";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

const ProjectRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

useEffect(() => {
  const cookieValue = document.cookie
    .split("; ")
    .find(row => row.startsWith("user="))
    ?.split("=")[1];

  console.log('Cookie Value:', cookieValue);
  setIsLoggedIn(!!cookieValue);
}, [location]);


  const handleLogout = () => {
    // Simulate logout by removing the "user" cookie
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    navigate("/");
  };

  const PrivateRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/login" state={{ from: location.pathname }} />;
  };
  const PrivateRoute2 = ({ element }) => {
    return !isLoggedIn ? element : <Navigate to="/" state={{ from: location.pathname }} />;
  };

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} className="flex justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PrivateRoute2 element={<LogIn />} />} />
        <Route path="/signup" element={<PrivateRoute2 element={<SignUp />} />} />
        <Route path="/allmentors" element={<PrivateRoute element={<Allmentors />} />} />
        <Route path="/eduvicourses" element={<PrivateRoute element={<EduviCourses />} />} />
        <Route path="/coursesdetail" element={<PrivateRoute element={<EduviCoursesDetails />} />} />
        <Route path="/eduvijoinasteacher" element={<PrivateRoute element={<EduviJoinAsTeacher />} />} />
        <Route path="/eduvishop" element={<PrivateRoute element={<EduviShop />} />} />
        <Route path="/singlementordetails/:id" element={<PrivateRoute element={<Singlementordetails />} />} />
        <Route path="/courseDet" element={<PrivateRoute element={<CourseDet />} />} />
        <Route path="/mentorForm" element={<PrivateRoute element={<MentorForm />} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default ProjectRoutes;

