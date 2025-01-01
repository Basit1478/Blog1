const Footer = () => {
    return (
      <footer className="bg-orange-300  py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="ml-10">
            <h3 className="text-xl font-bold mb-4 text-gray-900">About</h3>
            <p className="text-gray-900">
              Welcome to <span className="text-orange-500 font-sans font-bold text-xl">Info</span><span className="text-orange-800 font-sans font-bold text-xl">logy</span>, you go-to platform for amazing stories and insights.
            </p>
          </div>
          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-gray-900">
              <li><a href="/" className="hover:text-orange-500">Home</a></li>
              <li><a href="/about" className="hover:text-orange-500">About</a></li> 
              <li><a href="/blog" className="hover:text-orange-500">Blog</a></li>
              <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Newsletter</h3>
            <p className="text-gray-900">Stay updated with our latest posts.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md text-gray-800"
              />
              <button className="mt-2 w-full bg-orange-500 text-gray-900 py-2 rounded-md hover:bg-orange-600">
                Subscribe
              </button>
            </form>
          </div>
          <div className="ml-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              target="_blank"
              className="text-gray-900 hover:text-orange-600"
              href="https://twitter.com"
            >
              Twitter
            </a>
            <a
              target="_blank"
              className="text-gray-900 hover:text-orange-600"
              href="https://facebook.com"
            >
              Facebook
            </a>
            <a
              target="_blank"
              className="text-gray-900 hover:text-orange-600"
              href="https://linkedin.com"
            >
              LinkedIn
            </a>
          </div>
        </div>
        </div>
        
        <p className="text-center text-gray-900 mt-6 ml-3">
          &copy; {new Date().getFullYear()} Developed By <span className="font-bold text-orange-800"> Basit Ali</span>. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  
