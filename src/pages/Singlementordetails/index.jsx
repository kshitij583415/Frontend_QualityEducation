import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import EduviCoursesSubscribe from "../../components/EduviCoursesSubscribe";
import Header1 from "../../components/Header1";

export default function SinglementordetailsPage() {
  return (
    <>
      <Helmet>
        <title>01fe21bcs314's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <div className="flex flex-col items-center justify-start w-full gap-12">
            <Header1 className="flex flex-row justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-center w-full md:px-5 max-w-7xl">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-start w-full p-[29px] sm:p-5 bg-red-50 rounded-[20px]">
                      <Text as="p" className="mb-[92px] !text-black-900_02 !font-medium">
                        Home | Mentor | Kristin Watson
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[32%] md:w-full mt-[-81px] ml-[30px] md:ml-0 sm:ml-5">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-5 sm:gap-5">
                      <Img
                        src="images/img_bg_170x170.png"
                        alt="bg_one"
                        className="w-[170px] md:h-auto mb-px object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[53%] sm:w-full gap-0.5">
                        <Text size="lg" as="p" className="!text-gray-900">
                          Kritsin Watson
                        </Text>
                        <Text size="md" as="p">
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row md:flex-col justify-start items-start w-full gap-10 md:gap-5 md:px-5 max-w-7xl">
              <div className="flex flex-col items-center justify-start w-[66%] md:w-full gap-[29px]">
                <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5">
                  <div className="flex flex-row md:flex-col justify-start w-[79%] md:w-full gap-[19px] md:gap-5">
                    <Button color="orange_200_01" className="sm:px-5 font-medium min-w-[205px] rounded-[10px]">
                      About
                    </Button>
                    <Button color="white_A700" className="sm:px-5 font-medium min-w-[205px] rounded-[10px]">
                      Courses
                    </Button>
                    <Button color="white_A700" className="sm:px-5 font-medium min-w-[205px] rounded-[10px]">
                      Reviews
                    </Button>
                  </div>
                  <Button className="sm:px-5 font-medium min-w-[160px] rounded-[10px]">Contact Now</Button>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[29px]">
                  <div className="flex flex-col items-start justify-start w-full gap-2">
                    <Heading size="xl" as="h1">
                      About Kritsin
                    </Heading>
                    <Text as="p" className="!leading-[30px]">
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-2">
                    <Heading size="xl" as="h2">
                      Certification
                    </Heading>
                    <Text as="p" className="!leading-[30px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[19px] p-5 bg-white-A700 rounded-[10px]">
                <div className="flex flex-row justify-between items-center w-full mt-[9px]">
                  <Heading size="s" as="h3" className="!text-gray-700_01">
                    Total Course
                  </Heading>
                  <Heading size="lg" as="h4" className="!text-deep_orange-400 text-right">
                    30
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-row justify-start items-start gap-2">
                    <Heading size="s" as="h5" className="!text-gray-700_01">
                      Ratings
                    </Heading>
                    <Img src="images/img_vector_amber_500.svg" alt="vector_one" className="h-[16px] w-[16px] mt-0.5" />
                  </div>
                  <Heading size="s" as="h6" className="text-right">
                    4.9(153)
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Heading size="s" as="h5" className="mt-px !text-gray-700_01">
                    Experiences
                  </Heading>
                  <Heading size="s" as="h5" className="text-right">
                    10 Years
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Heading size="s" as="h5" className="mb-px !text-gray-700_01">
                    Graduated
                  </Heading>
                  <Heading size="s" as="h5" className="text-right">
                    Yes
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Heading size="s" as="h5" className="!text-gray-700_01">
                    Language
                  </Heading>
                  <Heading size="s" as="h5" className="text-right">
                    English, French
                  </Heading>
                </div>
                <div className="flex flex-row justify-between items-center w-full mb-2.5">
                  <Heading size="s" as="h5" className="!text-gray-700_01">
                    Social
                  </Heading>
                  <div className="flex flex-row justify-between items-center w-auto gap-[15px]">
                    <Img
                      src="images/img_facebook_logo_1_gray_900.svg"
                      alt="facebooklogoone"
                      className="h-[22px] w-[22px]"
                    />
                    <Button color="deep_orange_400" size="xs" shape="circle" className="w-[36px]">
                      <Img src="images/img_instagram_icon.svg" />
                    </Button>
                    <Img src="images/img_twitter_logo_gray_900.svg" alt="twitterlogo_one" className="h-[17px]" />
                    <Img src="images/img_linkedin_icon_gray_900.svg" alt="linkedinicon" className="h-[18px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EduviCoursesSubscribe className="flex flex-row justify-center w-full" />
        <footer className="flex justify-center items-center w-full px-14 py-20 md:p-5 bg-gray-100">
          <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 max-w-7xl">
            <div className="flex flex-col items-center justify-start w-[15%] md:w-full pb-[3px] gap-[46px]">
              <div className="flex flex-col items-center justify-start w-[97%] md:w-full gap-[22px]">
                <Img src="images/img_logo.svg" alt="logo_three" className="h-[30px]" />
                <div className="flex flex-row justify-between items-center w-[85%] md:w-full">
                  <Img src="images/img_facebook_logo_1.svg" alt="facebooklogoone" className="h-[22px] w-[22px]" />
                  <Button color="deep_orange_400" size="xs" shape="circle" className="w-[36px]">
                    <Img src="images/img_instagram_icon.svg" />
                  </Button>
                  <Img src="images/img_twitter_logo.svg" alt="twitterlogo" className="h-[17px]" />
                  <Img src="images/img_linkedin_icon.svg" alt="linkedinicon" className="h-[18px]" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Text as="p">©2021 Educatsy</Text>
                <Text as="p">Educatsy is a registered</Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
              <Heading size="md" as="h5">
                Courses
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-6 py-[5px]">
                <Text as="p">Classroom courses</Text>
                <Text as="p" className="!leading-[30px]">
                  Virtual classroom courses
                </Text>
                <Text as="p">E-learning courses</Text>
                <Text as="p">Video Courses</Text>
                <Text as="p">Offline Courses</Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[14%] md:w-full pt-0.5 gap-[17px]">
              <Heading size="md" as="h5">
                Community
              </Heading>
              <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
                <Text as="p" className="mt-0.5">
                  Learners
                </Text>
                <Text as="p">Partners</Text>
                <Text as="p">Developers</Text>
                <Text as="p">Transactions</Text>
                <Text as="p">Blog</Text>
                <Text as="p">Teaching Center</Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
              <Heading size="md" as="h5">
                Quick links
              </Heading>
              <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
                <Text as="p" className="mt-0.5">
                  Home
                </Text>
                <Text as="p">Professional Education</Text>
                <Text as="p">Courses</Text>
                <Text as="p">Admissions</Text>
                <Text as="p">Testimonial</Text>
                <Text as="p">Programs</Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
              <Heading size="md" as="h5">
                More
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[26px] py-1">
                <Text as="p">Press</Text>
                <Text as="p">Investors</Text>
                <Text as="p">Terms</Text>
                <a href="#">
                  <Text as="p">Privacy</Text>
                </a>
                <Text as="p">Help</Text>
                <Text as="p">Contact</Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
