const HeroSection = () => {
    return (
      <section className="flex items-center justify-between bg-gray-100 p-10">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Welcome to UI/UX Hackathon</h1>
          <p className="mt-4 text-lg text-gray-700">Building amazing experiences!</p>
        </div>
        <div>
        <img
                src="images/nav.png"
                alt="Feature 4"
                className="w-1320px h-628 mx-auto mb-4 top-531px"
              />
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  