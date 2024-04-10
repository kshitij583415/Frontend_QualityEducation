import React from "react";
import { Img, Text } from "./..";

export default function AllMentorsMaincard({
  bgOne = "images/img_bg_290x290.png",
  kristinwatson = "Kristin Watson",
  foundermentor = "Founder & Mentor",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[290px] w-[290px]">
        <Img src={bgOne} alt="bg_one" className="w-[290px] md:h-auto object-cover rounded-[10px]" />
      </div>
      <div className="flex flex-row justify-start items-start w-full gap-6">
        <div className="flex flex-col items-start justify-start w-[84%] pt-[5px] gap-[13px]">
          <Text as="p" className="!text-black-900_02 !font-medium">
            {kristinwatson}
          </Text>
          <Text size="xs" as="p">
            {foundermentor}
          </Text>
        </div>
        <Img src="images/img_arrow_down_black_900_02.svg" alt="arrowdown_nine" className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}
