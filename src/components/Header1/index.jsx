import { Link } from "react-router-dom";
import { Img, Text } from "./..";


export default function Header1({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-7xl">
        <div className="flex items-center"> {/* Left side with logo */}
          <Img src="images/logo.jpg" alt="logo_one" className="h-[40px]" />
        </div>
        <div className="flex flex-row justify-end items-center w-[70%] md:w-full"> {/* Right side with other elements */}
          <div className="flex flex-row justify-end items-center w-full gap-6 md:gap-5">
            <Link to="/eduvishop" className="text-gray-900 font-medium"> {/* Link to Shop */}
              Books
            </Link>
            <Link to="/allmentors" className="text-gray-900 font-medium"> {/* Link to Mentors */}
              Mentors
            </Link>
            <Link to="/eduvicourses" className="text-gray-900 font-medium"> 
              Courses
            </Link>
          </div>
          <div className="flex items-center gap-2.5">
            <Img src="images/img_profile_24_outline.svg" alt="profiletwentyfo" className="h-[30px] w-[30px] ml-6" />
            <Text as="p" className="text-gray-900 font-medium">
            <Link to='/login'>
              Login
            </Link>
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
}
