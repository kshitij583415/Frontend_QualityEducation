import { Button, Heading, Img, RatingBar } from "./..";

export default function EduviCoursesDetailsMaincard1({
  imageOne = "images/defaultNoData.png",
  thethree = "The Three Musketeers",
  price = "₹199",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row sm:flex-col justify-start items-center  md:w-full gap-[15px] sm:gap-5">
        <div className="flex flex-row justify-start w-[31%] sm:w-full">
          <Img src={imageOne} alt="image_one" className="w-[55%] md:h-auto sm:w-full object-cover rounded-[10px]" />
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
      <Button color="red_50" size="lg" shape="round" className="w-[44px] !rounded-md">
        <Img src="images/img_shopping_bag_24.svg" />
      </Button>
    </div>
  );
}
