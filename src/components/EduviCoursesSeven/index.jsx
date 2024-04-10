import React from "react";
import { Button, Text, Heading, Img } from "./..";

export default function EduviCoursesSeven({
  standardone = "Standard Seven",
  standard1isa = "Standard 7 Blood Management mandates that leaders of health service organizations...",
  classDetails = "Class Details",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full gap-[25px] p-[15px] bg-white-A700 rounded-[15px]">
        <div className="flex flex-col items-center justify-start w-full mt-[15px] gap-[19px] md:px-5 max-w-[260px]">
          <Img src="images/defaultNoData.png" alt="image" className="h-[50px] w-[50px]" />
          <div className="flex flex-col items-center justify-start w-full gap-[9px]">
            <Heading size="lg" as="h1" className="text-center">
              {standardone}
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
        >
          {classDetails}
        </Button>
      </div>
    </div>
  );
}
