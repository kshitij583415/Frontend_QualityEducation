import FeatureCard from "components/Features";
import Testimonials from "pages/Testimonials";
import Vision from "pages/Vision";
import Header from "../../components/Header";
export default function HomePage() {
  return (
    <>
      <Header className="flex justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
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
      <h1 className="text-3xl font-bold text-center mt-8 mb-6" style={{fontSize:"50px"}}>Our Vision</h1>

      <Vision />
      {/* Features Section */}
      <FeatureCard />
      <Testimonials />

      {/* <Footer className="w-full" /> */}
    </>
  );
}
