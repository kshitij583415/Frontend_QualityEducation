import React from "react";
import { Text, Heading, Img, Button } from "./..";

export default function EduviCoursesFooter({
  p2021educatsy = "©2021 Educatsy",
  educatsyisa = "Educatsy is a registered",
  coursesOne = "Courses",
  classroom = "Classroom courses",
  virtual = "Virtual classroom courses",
  elearning = "E-learning courses",
  videocourses = "Video Courses",
  offlinecourses = "Offline Courses",
  community = "Community",
  learners = "Learners",
  partners = "Partners",
  developers = "Developers",
  transactions = "Transactions",
  blog = "Blog",
  teachingcenter = "Teaching Center",
  quicklinks = "Quick links",
  home = "Home",
  professional = "Professional Education",
  coursesTwo = "Courses",
  admissions = "Admissions",
  testimonial = "Testimonial",
  programs = "Programs",
  more = "More",
  press = "Press",
  investors = "Investors",
  terms = "Terms",
  privacy = "Privacy",
  help = "Help",
  contact = "Contact",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10 md:px-5 max-w-7xl">
        <div className="flex flex-col items-center justify-start w-[15%] md:w-full pb-[3px] gap-[46px]">
          <div className="flex flex-col items-center justify-start w-[97%] md:w-full gap-[22px]">
            <Img src="images/img_logo.svg" alt="logo_three" className="h-[30px]" />
            <div className="flex flex-row justify-between items-center w-[85%] md:w-full">
              <Img src="images/img_facebook_logo_1.svg" alt="facebooklogoone" className="h-[22px] w-[22px]" />
              <Button color="deep_orange_400" size="xs" shape="circle" className="w-[36px]">
                <Img src="images/img_instagram_icon.svg" />
              </Button>
              <Img src="images/img_twitter_logo.svg" alt="twitterlogo_one" className="h-[17px]" />
              <Img src="images/img_linkedin_icon.svg" alt="linkedinicon" className="h-[18px]" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-3.5">
            <Text as="p">{p2021educatsy}</Text>
            <Text as="p">{educatsyisa}</Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
          <Heading size="md" as="h1">
            {coursesOne}
          </Heading>
          <div className="flex flex-col items-start justify-start w-full gap-6 py-[5px]">
            <Text as="p">{classroom}</Text>
            <Text as="p" className="!leading-[30px]">
              {virtual}
            </Text>
            <Text as="p">{elearning}</Text>
            <Text as="p">{videocourses}</Text>
            <Text as="p">{offlinecourses}</Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[14%] md:w-full pt-0.5 gap-[17px]">
          <Heading size="md" as="h2">
            {community}
          </Heading>
          <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
            <Text as="p" className="mt-0.5">
              {learners}
            </Text>
            <Text as="p">{partners}</Text>
            <Text as="p">{developers}</Text>
            <Text as="p">{transactions}</Text>
            <Text as="p">{blog}</Text>
            <Text as="p">{teachingcenter}</Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
          <Heading size="md" as="h2">
            {quicklinks}
          </Heading>
          <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
            <Text as="p" className="mt-0.5">
              {home}
            </Text>
            <Text as="p">{professional}</Text>
            <Text as="p">{coursesTwo}</Text>
            <Text as="p">{admissions}</Text>
            <Text as="p">{testimonial}</Text>
            <Text as="p">{programs}</Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
          <Heading size="md" as="h2">
            {more}
          </Heading>
          <div className="flex flex-col items-start justify-start w-full gap-[26px] py-1">
            <Text as="p">{press}</Text>
            <Text as="p">{investors}</Text>
            <Text as="p">{terms}</Text>
            <Text as="p">{privacy}</Text>
            <Text as="p">{help}</Text>
            <Text as="p">{contact}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
