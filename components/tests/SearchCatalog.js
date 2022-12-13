import React from "react";

const SearchCatalog = ({ shadow, border, className }) => {
  return (
    <div
      className={`md:sticky top-10 bg-white text-black mx-10 rounded-md ${
        shadow && "shadow-2xl"
      } ${border && "border border-black"} p-5 ${className}`}
    >
      <h1 className="font-bold text-xl mb-5 text-center md:text-left">
        Test Catalog
      </h1>
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        <p className="catalog-letter">A</p>
        <p className="catalog-letter">B</p>
        <p className="catalog-letter">C</p>
        <p className="catalog-letter">D</p>
        <p className="catalog-letter">E</p>
        <p className="catalog-letter">F</p>
        <p className="catalog-letter">G</p>
        <p className="catalog-letter">H</p>
        <p className="catalog-letter">I</p>
        <p className="catalog-letter">J</p>
        <p className="catalog-letter">K</p>
        <p className="catalog-letter">L</p>
        <p className="catalog-letter">M</p>
        <p className="catalog-letter">N</p>
        <p className="catalog-letter">O</p>
        <p className="catalog-letter">P</p>
        <p className="catalog-letter">Q</p>
        <p className="catalog-letter">R</p>
        <p className="catalog-letter">S</p>
        <p className="catalog-letter">T</p>
        <p className="catalog-letter">U</p>
        <p className="catalog-letter">V</p>
        <p className="catalog-letter">W</p>
        <p className="catalog-letter">X</p>
        <p className="catalog-letter">Y</p>
        <p className="catalog-letter">Z</p>
      </div>
      <div className="flex flex-col justify-center gap-5 my-10">
        <p className="catalog-services">Services</p>
        <p className="catalog-services">Profile</p>
        <p className="catalog-services">About Us</p>
        <p className="catalog-services">Blog</p>
        <p className="catalog-services">Contact Us</p>
        <p className="catalog-services">Health Packages</p>
        <p className="catalog-services">Make an Appointment</p>
      </div>
    </div>
  );
};

export default SearchCatalog;
