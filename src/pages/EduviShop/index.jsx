// import React from "react";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
// import { CloseSVG } from "../../assets/images";
// import { Heading, Img, Input, RatingBar, Text } from "../../components";
// import EduviShopEight from "../../components/EduviShopEight";
// import EduviShopFive from "../../components/EduviShopFive";
// import EduviShopFour from "../../components/EduviShopFour";
// import EduviShopNine from "../../components/EduviShopNine";
// import EduviShopOne from "../../components/EduviShopOne";
// import EduviShopSeven from "../../components/EduviShopSeven";
// import EduviShopSix from "../../components/EduviShopSix";
// import EduviShopThree from "../../components/EduviShopThree";
// import EduviShopTwo from "../../components/EduviShopTwo";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
// import { SelectBox } from "../../components/SelectBox";

// const dropDownOptions = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];

// export default function EduviShopPage() {
//   const [searchBarValue6, setSearchBarValue6] = React.useState("");

//   return (
//     <>
//       <Helmet>
//         <title>Scholar Sphere</title>
//         <meta
//           name="description"
//           content="Web site created using create-react-app"
//         />
//       </Helmet>
//       <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
//         <div className="flex flex-col items-center justify-start w-full gap-12">
//           <Header className="flex justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
//           <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 md:px-5 bg-red-50 max-w-7xl rounded-[20px]">
//             <Text
//               as="p"
//               className="mt-[5px] ml-2.5 md:ml-0 !text-black-900_02 !font-medium flex items-center"
//             >
//               <Link to="/">Home |</Link>{" "}
//               <span className="ml-1">
//                 <Link to="/eduvishop">Books</Link>
//               </span>
//             </Text>

//             <div className="flex flex-row md:flex-col justify-between items-center w-[99%] md:w-full ml-2.5 gap-[492px] md:gap-10 md:ml-0">
//               <Heading size="3xl" as="h1" className="w-[30%] !font-semibold">
//                 <>
//                   ScholarSphere Online
//                   <br />
//                   Book Shop
//                 </>
//               </Heading>
//               <Img
//                 src="images/img_kisspng_bookcas.png"
//                 alt="kisspngbookcas"
//                 className="w-[31%] md:w-full md:h-[210px] object-cover"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row md:flex-col justify-start items-start w-full pl-20 pr-14 gap-10 md:gap-5 md:px-5">
//           <div className="flex flex-col w-[31%] md:w-full gap-[39px]">
//             <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-3.5">
//               <Heading size="xl" as="h2" className="!text-black-900_02">
//                 Popular Books
//               </Heading>
//               <div className="flex flex-col w-full gap-[15px]">
//                 <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
//                   <Img
//                     src="images/img_image_14.png"
//                     alt="popular_books"
//                     className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px]"
//                   />
//                   <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
//                     <RatingBar
//                       value={5}
//                       isEditable={true}
//                       color="#ffc107"
//                       activeColor="#ffc107"
//                       size={16}
//                       className="flex justify-between"
//                     />
//                     <Heading as="h3" className="!text-black-900_02">
//                       <>
//                         The Three Musketeers, by
//                         <br />
//                         Alexandre Dumas
//                       </>
//                     </Heading>
//                     <Heading as="h4" className="!text-red-300_01">
//                       ₹0
//                     </Heading>
//                   </div>
//                 </div>
//                 <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
//                   <Img
//                     src="images/img_image_90x75.png"
//                     alt="image"
//                     className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px]"
//                   />
//                   <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
//                     <RatingBar
//                       value={5}
//                       isEditable={true}
//                       color="#ffc107"
//                       activeColor="#ffc107"
//                       size={16}
//                       className="flex justify-between"
//                     />
//                     <Heading as="h5" className="!text-black-900_02">
//                       <>
//                         The Three Musketeers, by
//                         <br />
//                         Alexandre Dumas
//                       </>
//                     </Heading>
//                     <Heading as="h6" className="!text-red-300_01">
//                       ₹0
//                     </Heading>
//                   </div>
//                 </div>
//                 <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
//                   <Img
//                     src="images/img_image_4.png"
//                     alt="image"
//                     className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px]"
//                   />
//                   <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
//                     <RatingBar
//                       value={5}
//                       isEditable={true}
//                       color="#ffc107"
//                       activeColor="#ffc107"
//                       size={16}
//                       className="flex justify-between"
//                     />
//                     <Heading as="h6" className="!text-black-900_02">
//                       <>
//                         The Three Musketeers, by
//                         <br />
//                         Alexandre Dumas
//                       </>
//                     </Heading>
//                     <Heading as="h6" className="!text-red-300_01">
//                       ₹0
//                     </Heading>
//                   </div>
//                 </div>
//               </div>
//               {/* <Text size="lg" as="p" className="!text-red-300_01">
//                 See More
//               </Text> */}
//             </div>
//             <div className="flex flex-col items-start justify-start w-full gap-4">
//               <Heading size="xl" as="h3" className="!text-black-900_02">
//                 New Arrivals
//               </Heading>
//               <div className="flex flex-col w-full gap-[15px]">
//                 <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
//                   <Img
//                     src="images/img_image_14.png"
//                     alt="new_arrivals"
//                     className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px]"
//                   />
//                   <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
//                     <RatingBar
//                       value={5}
//                       isEditable={true}
//                       color="#ffc107"
//                       activeColor="#ffc107"
//                       size={16}
//                       className="flex justify-between"
//                     />
//                     <Heading as="h6" className="!text-black-900_02">
//                       <>
//                         The Three Musketeers, by
//                         <br />
//                         Alexandre Dumas
//                       </>
//                     </Heading>
//                     <Heading as="h6" className="!text-red-300_01">
//                       ₹0
//                     </Heading>
//                   </div>
//                 </div>
//                 <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
//                   <Img
//                     src="images/img_image_90x75.png"
//                     alt="image_one"
//                     className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px]"
//                   />
//                   <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
//                     <RatingBar
//                       value={5}
//                       isEditable={true}
//                       color="#ffc107"
//                       activeColor="#ffc107"
//                       size={16}
//                       className="flex justify-between"
//                     />
//                     <Heading as="h6" className="!text-black-900_02">
//                       <>
//                         The Three Musketeers, by
//                         <br />
//                         Alexandre Dumas
//                       </>
//                     </Heading>
//                     <Heading as="h6" className="!text-red-300_01">
//                       ₹0
//                     </Heading>
//                   </div>
//                 </div>
//                 <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
//                   <Img
//                     src="images/img_image_4.png"
//                     alt="image_one"
//                     className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px]"
//                   />
//                   <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
//                     <RatingBar
//                       value={5}
//                       isEditable={true}
//                       color="#ffc107"
//                       activeColor="#ffc107"
//                       size={16}
//                       className="flex justify-between"
//                     />
//                     <Heading as="h6" className="!text-black-900_02">
//                       <>
//                         The Three Musketeers, by
//                         <br />
//                         Alexandre Dumas
//                       </>
//                     </Heading>
//                     <Heading as="h6" className="!text-red-300_01">
//                       ₹0
//                     </Heading>
//                   </div>
//                 </div>
//               </div>
//               {/* <Text size="lg" as="p" className="!text-red-300_01">
//                 See More
//               </Text> */}
//             </div>
//           </div>
//           <div className="flex flex-col items-center justify-start w-[65%] md:w-full gap-10">
//             <div className="flex flex-col items-center justify-start w-full gap-[30px]">
//               {/* <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5">
//                 <Button color="orange_200_01" className="sm:px-5 font-medium min-w-[131px] rounded-[10px]">
//                   All Books
//                 </Button>
//                 <Button color="white_A700" className="sm:px-5 font-medium min-w-[212px] rounded-[10px]">
//                   Kindergarten
//                 </Button>
//                 <Button color="white_A700" className="sm:px-5 font-medium min-w-[212px] rounded-[10px]">
//                   High School
//                 </Button>
//                 <Button color="white_A700" className="sm:px-5 font-medium min-w-[212px] rounded-[10px]">
//                   College
//                 </Button>
//               </div> */}
//               <div className="flex flex-row sm:flex-col justify-start w-full gap-[15px] sm:gap-5">
//                 <Input
//                   color="white_A700"
//                   size="md"
//                   name="search"
//                   placeholder="Search Class, Course, Book Name"
//                   value={searchBarValue6}
//                   onChange={(e) => setSearchBarValue6(e)}
//                   suffix={
//                     searchBarValue6?.length > 0 ? (
//                       <CloseSVG
//                         onClick={() => setSearchBarValue6("")}
//                         height={24}
//                         width={24}
//                         fillColor="#ffffffff"
//                       />
//                     ) : (
//                       <Img
//                         src="images/img_search.svg"
//                         alt="search"
//                         className="cursor-pointer"
//                       />
//                     )
//                   }
//                   className="w-[67%] sm:w-full gap-[35px] !text-gray-700_99 rounded-tr-[10px] rounded-br-[10px] font-medium"
//                 />
//                 <SelectBox
//                   shape="round"
//                   indicator={
//                     <Img
//                       src="images/img_arrowdown_red_300_01.svg"
//                       alt="arrow_down"
//                     />
//                   }
//                   name="sortbylatest"
//                   placeholder="Sort by: Latest"
//                   options={dropDownOptions}
//                   className="w-[33%] sm:w-full gap-px font-medium"
//                 />
//               </div>
//               <div className="justify-center w-full gap-[15px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
//                 <EduviShopOne className="flex flex-col items-center justify-start w-full gap-2" />
//                 <EduviShopTwo className="flex flex-col items-center justify-start w-full gap-2" />
//                 <EduviShopThree className="flex flex-col items-center justify-start w-full gap-2" />
//                 <EduviShopFour className="flex flex-col items-center justify-start w-full gap-2" />
//                 <EduviShopFive className="flex flex-col items-center justify-start w-full gap-2" />
//                 <EduviShopSix className="flex flex-col items-center justify-start w-full gap-2" />
//                 <EduviShopSeven className="flex flex-col items-center justify-start w-full gap-2" />
//                 <EduviShopEight className="flex flex-col items-center justify-start w-full gap-2" />
//                 <EduviShopNine className="flex flex-col items-center justify-start w-full gap-2" />
//               </div>
//             </div>
//             {/* <div className="flex flex-row justify-between items-center w-[35%] md:w-full">
//               <Button color="white_A700" size="lg" shape="round" className="w-[15%] !rounded-md">
//                 <Img src="images/img_arrow_left.svg" />
//               </Button>
//               <Text as="p" className="!text-gray-900 !font-medium">
//                 Page
//               </Text>
//               <Button color="white_A700" size="sm" className="!text-gray-700_01 font-medium min-w-[42px] rounded-lg">
//                 5
//               </Button>
//               <Text as="p" className="!text-gray-900 !font-medium">
//                 of 80
//               </Text>
//               <Button size="lg" shape="round" className="w-[15%] !rounded-md">
//                 <Img src="images/img_arrow_right.svg" />
//               </Button>
//             </div> */}
//           </div>
//         </div>
//         <Footer className="flex flex-col items-center justify-center w-full" />
//       </div>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Heading, Img, RatingBar, Text } from "../../components";
import EduviShopTwo from "../../components/EduviShopTwo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function EduviShopPage() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [books, setBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch("http://localhost:9090/getBooks");
        const data = await response.json();
        setBooks(data);

        // Assuming the API returns the popular books and new arrivals as part of the response
        setPopularBooks(data.filter((book) => book.isPopular === true));
        setNewArrivals(data.filter((book) => book.isNew === true));
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <>
      <Helmet>
        <title>Scholar Sphere</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <Header className="flex justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
          <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 md:px-5 bg-red-50 max-w-7xl rounded-[20px]">
            <Text
              as="p"
              className="mt-[5px] ml-2.5 md:ml-0 !text-black-900_02 !font-medium flex items-center"
            >
              <Link to="/">Home |</Link>
              <span className="ml-1">
                <Link to="/eduvishop">Books</Link>
              </span>
            </Text>

            <div className="flex flex-row md:flex-col justify-between items-center w-[99%] md:w-full ml-2.5 gap-[492px] md:gap-10 md:ml-0">
              <Heading size="3xl" as="h1" className="w-[30%] !font-semibold">
                <>
                  ScholarSphere Online
                  <br />
                  Book Shop
                </>
              </Heading>
              <Img
                src="images/img_kisspng_bookcas.png"
                alt="kisspngbookcas"
                className="w-[31%] md:w-full md:h-[210px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col justify-start items-start w-full pl-20 pr-14 gap-10 md:gap-5 md:px-5">
          <div className="flex flex-col w-[31%] md:w-full gap-[39px]">
            <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-3.5">
              <Heading size="xl" as="h2" className="!text-black-900_02">
                Popular Books
              </Heading>
              <div className="flex flex-col w-full gap-[15px]">
                {popularBooks.map((book) => (
                  <div
                    key={book.id}
                    className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]"
                  >
                    <Img
                      src={book.image}
                      alt={book.title}
                      className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
                      <RatingBar
                        value={book.rating}
                        isEditable={true}
                        color="#ffc107"
                        activeColor="#ffc107"
                        size={16}
                        className="flex justify-between"
                      />
                      <Heading as="h3" className="!text-black-900_02">
                        {book.title}
                      </Heading>
                      <Heading as="h4" className="!text-red-300_01">
                        ₹40
                      </Heading>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <Heading size="xl" as="h3" className="!text-black-900_02">
                New Arrivals
              </Heading>
              <div className="flex flex-col w-full gap-[15px]">
                {newArrivals.map((book) => (
                  <div
                    key={book.id}
                    className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]"
                  >
                    <Img
                      src={book.image || "images/img_image_14.png"}
                      alt={book.title}
                      className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
                      <RatingBar
                        value={book.rating}
                        isEditable={true}
                        color="#ffc107"
                        activeColor="#ffc107"
                        size={16}
                        className="flex justify-between"
                      />
                      <Heading as="h6" className="!text-black-900_02">
                        {book.title}
                      </Heading>
                      <Heading as="h6" className="!text-red-300_01">
                        ₹50
                      </Heading>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="justify-center w-full gap-[15px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
            {books.map((book) => (
              <EduviShopTwo key={book.id} bookId={book.id}
                className="flex flex-col items-center justify-start w-full gap-2"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
