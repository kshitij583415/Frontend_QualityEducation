import { Link } from "react-router-dom";
import { Img, Text } from "./..";
export default function AllMentorsMaincard({
  id, imageUrl, fullName,
  foundermentor = "Mentor",
  ...props
}) {
  return (
    <div {...props}>
      <Link
        to={{
          pathname: `/singlementordetails/${id}`,
          state: { fullName }
        }}
      >

        <div className="flex flex-col items-center justify-start w-[290px]">
          <Img src={imageUrl} alt="bg_one" className="w-[290px] md:h-auto object-cover rounded-[10px] h-[250px]" />
        </div>
        <div className="flex flex-row justify-start items-start w-full gap-6">
          <div className="flex flex-col items-start justify-start w-[84%] pt-[5px] gap-[13px]">
            <Text as="p" className="!text-black-900_02 !font-medium">
              {fullName}
            </Text>
            <Text size="xs" as="p">
              {foundermentor}
            </Text>
          </div>
          <Img src="images/img_arrow_down_black_900_02.svg" alt="arrowdown_nine" className="h-[24px] w-[24px]" />
        </div>
      </Link>
    </div >
  );
}
