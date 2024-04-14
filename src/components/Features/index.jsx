const FeatureCard = () => {
    return (
        <>
        <h1 className="font-bold mt-6 mb-3" style={{textAlign:"center",fontSize: "50px"}}>Features</h1>
      <div className="flex flex-wrap justify-around">
        {/* Popular Courses */}
        <div className="max-w-sm rounded overflow-hidden m-4 bg-gray-100 hover:shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Popular Courses</div>
            <p className="text-gray-700 text-base" style={{textAlign:"justify"}}>
              Explore our curated selection of popular courses designed to enhance your skills and knowledge in various fields. From coding to digital marketing, our courses are crafted by industry experts to provide you with practical insights and hands-on experience. Whether you're a beginner or an advanced learner, there's something for everyone in our catalog. Dive into our popular courses today and take your learning journey to the next level!
            </p>
          </div>
        </div>
  
        {/* Popular Books */}
        <div className="max-w-sm rounded overflow-hidden m-4 bg-gray-100 hover:shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Popular Books</div>
            <p className="text-gray-700 text-base" style={{textAlign:"justify"}}>
              Immerse yourself in the world of knowledge with our collection of popular books. From best-selling novels to informative non-fiction, we offer a diverse range of titles to cater to every reader's interests. Whether you're seeking inspiration, entertainment, or deepening your understanding of a particular subject, our selection has something for you. Let these acclaimed books transport you to new worlds, broaden your perspectives, and ignite your imagination.
            </p>
          </div>
        </div>
  
        {/* Our Mentors */}
        <div className="max-w-sm rounded overflow-hidden m-4 bg-gray-100 hover:shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Our Mentors</div>
            <p className="text-gray-700 text-base" style={{textAlign:"justify"}}>
              Meet the driving force behind our community's success – our dedicated mentors. With years of experience and expertise in their respective fields, our mentors are committed to guiding and supporting you on your journey towards personal and professional growth. From providing valuable advice to offering mentorship programs, they are here to help you overcome challenges, unlock your potential, and achieve your goals. Connect with our mentors today and embark on a transformative learning experience!
            </p>
          </div>
        </div>
      </div>
      </>
      
    );
  };
  
  export default FeatureCard;
