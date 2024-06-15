// import { Heading, Img, RatingBar } from "./..";

// export default function EduviShopTwo({ thethree = "The Three Musketeers", price = "₹0", ...props }) {
//   return (
//     <div {...props}>
//       <div className="flex flex-col items-center justify-start w-full md:h-auto p-5 bg-white-A700 rounded-[10px]">
//         <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[230px]">
//           <Img
//             src="images/img_image_14.png"
//             alt="image_one"
//             className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col items-start justify-start w-full gap-[9px]">
//         <Heading as="h1">{thethree}</Heading>
//         <div className="flex flex-row justify-between items-center w-full">
//           <Heading as="h2" className="!text-red-300_01">
//             {price}
//           </Heading>
//           <RatingBar
//             value={5}
//             isEditable={true}
//             color="#ffc107"
//             activeColor="#ffc107"
//             size={16}
//             className="flex justify-between"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { Heading, Img, RatingBar } from "../../components";

export default function EduviShopTwo({ bookId, ...props }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(`http://localhost:9090/getBookById/${bookId}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    }

    fetchBook();
  }, [bookId]);

  if (!book) return <div>Loading...</div>;

  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full md:h-auto p-5 bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[230px] h-[150px]">
          <Img
            src={book.image || "images/img_image_14.png"}
            alt={book.title || "image_one"}
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-[9px]">
        <Heading as="h1">{book.title}</Heading>
        <div className="flex flex-row justify-between items-center w-full">
          <Heading as="h2" className="!text-red-300_01">
            ₹99
          </Heading>
          <RatingBar
            value={book.rating}
            isEditable={true}
            color="#ffc107"
            activeColor="#ffc107"
            size={16}
            className="flex justify-between"
          />
        </div>
      </div>
    </div>

  );
}
