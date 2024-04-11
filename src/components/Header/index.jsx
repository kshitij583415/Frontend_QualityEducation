import { Img, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-7xl">
        <div className="flex items-center"> {/* Left side with logo */}
          <Img src="images/img_logo.svg" alt="logo_one" className="h-[30px]" />
        </div>
        <div className="flex flex-row justify-end items-center w-[70%] md:w-full"> {/* Right side with other elements */}
          <div className="flex flex-row justify-end items-center w-full gap-6 md:gap-5">
            <Text as="p" className="!text-gray-900 !font-medium">
              Shop
            </Text>
            <Text as="p" className="!text-gray-900 !font-medium">
              Mentors
            </Text>
            <Text as="p" className="!text-gray-900 !font-medium">
              Courses
            </Text>
          </div>
          <div className="flex items-center gap-2.5 "> {/* Adjusted flex properties */}
            <Img src="images/img_profile_24_outline.svg" alt="profiletwentyfo" className="h-[30px] w-[30px] ml-6" />
            <Text as="p" className="!text-gray-900  !font-medium">
              My Account
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
}
