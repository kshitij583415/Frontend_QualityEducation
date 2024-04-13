import Testimonials from "pages/Testimonials";
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

      {/* Vision Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Accessible Education
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* Vision Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Innovative Learning
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* Vision Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Popular Courses</h3>
              <p className="text-gray-700">
                Discover our most sought-after courses tailored for your
                learning journey.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Mentors</h3>
              <p className="text-gray-700">
                Learn from industry experts and academic leaders with a passion
                for teaching.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Free Resources</h3>
              <p className="text-gray-700">
                Explore our collection of free books and educational materials
                to enhance your learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials/>
      
      {/* <Footer className="w-full" /> */}
    </>
  );
}
