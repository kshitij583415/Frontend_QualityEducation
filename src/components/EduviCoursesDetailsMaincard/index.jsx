import React from "react";
import { Button, Img, Heading, RatingBar } from "./..";

export default function EduviCoursesDetailsMaincard({ thethree = "The Three Musketeers", price = "$40.00", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row sm:flex-col justify-start items-center w-[89%] md:w-full gap-[15px] sm:gap-5">
        <div className="flex flex-row justify-start w-[31%] sm:w-full">
          <Img
            src="images/defaultNoData.png"
            alt="image"
            className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-[67%] sm:w-full gap-3">
          <Heading size="md" as="h1">
            {thethree}
          </Heading>
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffc107"
            activeColor="#ffc107"
            size={20}
            className="flex justify-between"
          />
          <Heading size="md" as="h2" className="!text-deep_orange-400">
            {price}
          </Heading>
        </div>
      </div>
      <Button size="lg" shape="round" className="w-[44px] !rounded-md">
        <Img src="images/defaultNoData.png" />
      </Button>
    </div>
  );
}
