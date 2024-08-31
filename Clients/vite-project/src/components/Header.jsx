import React, { useState } from "react";
import { Link } from "react-router-dom";
import countries from "./countries";
import { AiFillCaretDown } from "react-icons/ai"; // For Dropdown Arrow
import { FaClipboard } from "react-icons/fa"; // For Copy Icon

function Header() {
  const [active, setActive] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [copied, setCopied] = useState(false);

  const category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];

  const phoneNumber = "516ff2442b2e425987f5e3822775e7de"; 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => setCopied(true))
      .catch(err => console.error("Failed to copy: ", err));
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 px-6 flex items-center justify-between z-50">
      <div className="font-semibold text-2xl flex items-center">
       
        <Link className="no-underline font-semibold" to="/">Headliner</Link>
      </div>


      <nav className="hidden md:flex flex-grow justify-center">
        <div className="hidden md:flex flex-grow justify-center">
          <div className="flex items-center gap-6">
            <Link className="no-underline font-semibold" to="/">All News</Link>

            <div className="relative">
              <button
                className="no-underline font-semibold flex items-center gap-2"
                onClick={() => {
                  setShowCategoryDropdown(!showCategoryDropdown);
                  // setShowCountryDropdown(false);
                }}
              >
                Top-Headlines
                <AiFillCaretDown
                  className={showCategoryDropdown ? "text-yellow-500" : "text-white"}
                />
              </button>
              {showCategoryDropdown && (
                <ul className="absolute bg-gray-700 p-2 mt-2 rounded shadow-lg">
                  {category.map((element, index) => (
                    <li key={index} onClick={() => setShowCategoryDropdown(false)}>
                      <Link
                        to={`/top-headlines/${element}`}
                        className="block p-2 text-white capitalize hover:bg-gray-600"
                      >
                        {element}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative">
              <button
                className="no-underline font-semibold flex items-center gap-2"
                onClick={() => {
                  setShowCountryDropdown(!showCountryDropdown);
                  setShowCategoryDropdown(false);
                }}
              >
                Country
                <AiFillCaretDown
                  className={showCountryDropdown ? "text-yellow-500" : "text-white"}
                />
              </button>
              {showCountryDropdown && (
                <ul className="absolute h-[500px] w-60  overflow-y-auto  -m-0  bg-gray-700 p-1 mt-2 rounded shadow-lg">
                  {countries.map((element, index) => (
                    <li key={index} onClick={() => setShowCountryDropdown(false)}>
                      <Link
                        to={`/country/${element?.iso_2_alpha}`}
                        className="flex items-center gap-2 p-2 text-white hover:bg-gray-600"
                      >
                        <img
                          src={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png`}
                          alt={element?.countryName}
                          className="w-8 h-4"
                        />
                        {element?.countryName}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

        </div>
        <div className="right-10 " >
          <button
            className="flex items-center px-4 py-2 font-semibold text-black bg-white border border-transparent rounded-lg shadow-lg hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            onClick={copyToClipboard}
          >
            {copied ? "Copied!" : "Copy API"}
          </button>



        </div>
      </nav>



      <button className="md:hidden text-white" onClick={() => setActive(!active)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>


      <div className={`md:hidden fixed top-0 left-0 w-[300px] h-screen bg-gray-800 text-white flex flex-col items-center ${active ? "block" : "hidden"}`}>
        <button className="absolute top-4 right-6 text-white text-2xl" onClick={() => setActive(false)}>
          &times;
        </button>

        <Link
          className="text-white font-semibold text-lg mb-4 mt-[100px]"
          to="/"
          onClick={() => setActive(false)}
        >
          All News
        </Link>

        <button
          className="text-white font-semibold flex items-center gap-2 mb-4"
          onClick={() => {
            setShowCategoryDropdown(!showCategoryDropdown);
            setShowCountryDropdown(false);
          }}
        >
          Top-Headlines
          <AiFillCaretDown
            className={showCategoryDropdown ? "text-yellow-500" : "text-white"}
          />
        </button>
        {showCategoryDropdown && (
          <ul className="bg-gray-700 p-2 rounded shadow-lg">
            {category.map((element, index) => (
              <li key={index} onClick={() => setShowCategoryDropdown(false)}>
                <Link
                  to={`/top-headlines/${element}`}
                  className="block p-2 text-white capitalize hover:bg-gray-600"
                >
                  {element}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <button
          className="text-white font-semibold flex items-center gap-2 mb-4"
          onClick={() => {
            setShowCountryDropdown(!showCountryDropdown);
            setShowCategoryDropdown(false);
          }}
        >
          Country
          <AiFillCaretDown
            className={showCountryDropdown ? "text-yellow-500" : "text-white"}
          />
        </button>
        {showCountryDropdown && (
          <ul className="bg-gray-700 p-2 h-[200px]  overflow-y-auto  rounded shadow-lg">
            {countries.map((element, index) => (
              <li key={index} onClick={() => setShowCountryDropdown(false)}>
                <Link
                  to={`/country/${element?.iso_2_alpha}`}
                  className="flex items-center gap-2 p-2 text-white hover:bg-gray-600"
                >
                  <img
                    src={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png`}
                    alt={element?.countryName}
                    className="w-6 h-4"
                  />
                  {element?.countryName}
                </Link>
              </li>
            ))}
          </ul>
        )}

 
        <button
          className="text-white font-semibold flex items-center gap-2 mb-4"
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy API"}
          <FaClipboard className="text-white" />
        </button>
      </div>
    </header>
  );
}

export default Header;
