import { Button, Heading, Img, Text } from "./..";
import { useNavigate } from "react-router-dom";


export default function EduviCoursesSix({
  standard = "Standard Six",
  standard1isa = "Standard 6 requires an organisation to have a system to resolve complaints...",
  classDetails = "Class Details",
  ...props
}) {
  const navigate = useNavigate();
  const navigateCourses = () => {
    navigate("/courseDet", { state: { standard } });
  }
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full gap-[25px] p-[15px] bg-white-A700 rounded-[15px]">
        <div className="flex flex-col items-center justify-start w-full mt-[15px] gap-[19px] md:px-5 max-w-[260px]">
          <Img src="images/6.png" alt="image" className="h-[50px] w-[50px]" />
          <div className="flex flex-col items-center justify-start w-full gap-[9px]">
            <Heading size="lg" as="h1" className="text-center">
              {standard}
            </Heading>
            <Text as="p" className="text-center !leading-[30px]">
              {standard1isa}
            </Text>
          </div>
        </div>
        <Button
          size="md"
          variant="outline"
          shape="round"
          className="mb-[15px] sm:px-5 font-medium min-w-[159px] sm:min-w-full"
          onClick={navigateCourses}
        >
          {classDetails}
        </Button>
      </div>
    </div>
  );
}
