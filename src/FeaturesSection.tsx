const FeaturesSection = () => {
    return (
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
            <div className="p-6 border rounded">
            <img
                src="images/blog1.png"
                alt="Feature 4"
                className="w-1520px h-900 mx-auto mb-4 top-531px mt-4"
              />
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p>Build interactive designs with ease.</p>
            </div>
  
            
            <div className="p-6 border rounded">
            <img
                src="images/menu2.png"
                alt="Feature 4"
                className="w-1320px h-628 mx-auto mb-4 top-531px"
              />
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p>Collaborate with your team effortlessly.</p>
            </div>
  
            
            <div className="p-6 border rounded">
            <img
                src="images/menu1.png"
                alt="Feature 4"
                className="w-1320px h-628 mx-auto mb-4 top-531px"
              />
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p>Deploy your projects in record time.</p>
            </div>
  
            
            <div className="p-6 border rounded">
              <img
                src="images/food4.png"
                alt="Feature 4"
                className="w-1320px h-628 mx-auto mb-4 top-531px"
              />
              <h3 className="text-xl font-semibold mb-4">Feature 4</h3>
              <p>Get insights and analytics instantly.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  