import EduviCoursesSubscribe from "components/EduviCoursesSubscribe";
import FeatureCard from "components/Features";
import Testimonials from "pages/Testimonials";
import Vision from "pages/Vision";
import { Button, Heading, Img, Text } from "../../components";
import Header from "../../components/Header";

export default function HomePage() {
  return (
    <>
      {/* <Header className="flex justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" /> */}
      {/* Hero Section */}
      <section className="relative h-[85vh]">
        <img
          src="images/homebg2.jpg"
          alt="Education"
          className="absolute inset-0 w-full h-full md:max-w-none md:w-auto object-cover rounded-lg shadow-lg mb-8"
        />
        <div className="absolute bottom-0 left-0 flex flex-col items-start justify-end p-8 text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 raleway-font">
            <span className="text-gray-100">Scholar</span>
            <span className="text-orange-500 font-extrabold text-7xl md:text-8xl">
              Sphere
            </span>
          </h1>
          <p className="text-2xl text-gray-300 font-bold raleway-font">
            "Fostering Knowledge, Inspiring Change, Building Tomorrow."
          </p>
        </div>
      </section>
      <h1
        className="text-3xl font-bold text-center mt-8 mb-6"
        style={{ fontSize: "50px" }}
      >
        Our Vision
      </h1>

      <Vision />
      {/* Features Section */}
      <FeatureCard />
      <Testimonials />
      <EduviCoursesSubscribe className="flex flex-row justify-center w-full mt-10 mb-10" />
      <footer className="flex justify-center items-center w-full px-14 py-20 md:p-5 bg-gray-100">
        <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 max-w-7xl">
          <div className="flex flex-col items-center justify-start w-[15%] md:w-full pb-[3px] gap-[46px]">
            <div className="flex flex-col items-center justify-start w-[97%] md:w-full gap-[22px]">
              <Img
                src="images/logo.jpg"
                alt="logo_three"
                className="h-[30px]"
              />
              <div className="flex flex-row justify-between items-center w-[85%] md:w-full">
                <Img
                  src="images/img_facebook_logo_1.svg"
                  alt="facebooklogoone"
                  className="h-[22px] w-[22px]"
                />
                <Button
                  color="deep_orange_400"
                  size="xs"
                  shape="circle"
                  className="w-[36px]"
                >
                  <Img src="images/img_instagram_icon.svg" />
                </Button>
                <Img
                  src="images/img_twitter_logo.svg"
                  alt="twitterlogo"
                  className="h-[17px]"
                />
                <Img
                  src="images/img_linkedin_icon.svg"
                  alt="linkedinicon"
                  className="h-[18px]"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[13px]">
              <Text as="p">©2024 ScholarSphere</Text>
              <Text as="p">ScholarSphere is a registered</Text>
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
      {/* <Footer className="w-full" /> */}
    </>
  );
}
