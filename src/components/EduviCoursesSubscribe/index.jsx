import React from "react";
import { Img, Button, Input, Text, Heading } from "./..";

export default function EduviCoursesSubscribe({
  subscribefor = (
    <>
      Subscribe For Get Update
      <br />
      Every New Courses
    </>
  ),
  p20kstudents = "20k+ students daily learn with ScholarSphere. Subscribe for new courses.",
  subscribe = "Subscribe",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full p-[50px] md:p-5 bg-black-900_01 max-w-7xl rounded-[20px]">
        <div className="flex flex-row md:flex-col justify-between w-full my-[11px] md:gap-10">
          <div className="flex flex-col items-start justify-start w-[16%] md:w-full gap-[57px]">
            <Img
              src="images/img_ellipse_169.png"
              alt="circleimage"
              className="h-[60px] w-[60px] md:h-auto rounded-[50%]"
            />
            <Img
              src="images/img_ellipse_170.png"
              alt="circleimage_one"
              className="h-[60px] w-[60px] md:h-auto ml-[127px] md:ml-5 rounded-[50%]"
            />
            <Img
              src="images/img_ellipse_171.png"
              alt="circleimage_two"
              className="h-[60px] w-[60px] md:h-auto ml-[30px] md:ml-0 sm:ml-5 rounded-[50%]"
            />
          </div>
          <div className="flex flex-row md:flex-col justify-between items-center w-[75%] md:w-full md:gap-10">
            <div className="flex flex-col items-center justify-start w-[66%] md:w-full gap-10">
              <div className="flex flex-col items-center justify-start w-full pb-[3px] gap-[26px]">
                <Heading
                  size="2xl"
                  as="h1"
                  className="!text-white-A700 !font-metropolis text-center leading-[55px]"
                >
                  {subscribefor}
                </Heading>
                <Text as="p" className="!text-white-A700_b2 text-center">
                  {p20kstudents}
                </Text>
              </div>
              <div className="flex flex-row sm:flex-col justify-center w-full sm:gap-5">
                <Input
                  shape="round"
                  name="email"
                  placeholder="enter your email"
                  className="w-[77%] md:w-full font-medium"
                />
                <Button
                  size="3xl"
                  className="sm:px-5 rounded-tr-[10px] rounded-br-[10px] font-medium min-w-[138px]"
                >
                  {subscribe}
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start w-[22%] md:w-full gap-[57px]">
              <Img
                src="images/img_ellipse_166.png"
                alt="circleimage"
                className="h-[60px] w-[60px] md:h-auto mr-[30px] sm:mr-5 rounded-[50%]"
              />
              <Img
                src="images/img_ellipse_167.png"
                alt="circleimage"
                className="h-[60px] w-[60px] md:h-auto mr-[127px] md:mr-5 rounded-[50%]"
              />
              <Img
                src="images/img_ellipse_168.png"
                alt="circleimage"
                className="h-[60px] w-[60px] md:h-auto rounded-[50%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
