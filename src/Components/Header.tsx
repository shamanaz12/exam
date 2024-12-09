const Header = () => {
    return (
      <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
        
        <nav>
          <ul className="flex space-x-4">

            <li className="flex items-center">
              <a href="hero" className="hover:text-yellow-500">Home</a>
            </li>
            <li className="flex items-center">
              
              <a href="features" className="hover:text-yellow-500">Features</a>
            </li>
            <li className="flex items-center">
              
              <a href="contact" className="hover:text-yellow-500">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  
  