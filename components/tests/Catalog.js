import React from "react";

const Catalog = () => {
  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <div className="w-2/3 mx-auto relative mb-32 top-20 bg-white h-1 rounded-lg" />
      <div className="flex flex-col md:flex-row md:items-start justify-center">
        <div className="md:sticky top-10 bg-white text-black md:w-1/4 mx-10 rounded-sm shadow-xl p-5">
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
        <div className="md:ml-auto w-2/3 mx-auto my-10 md:mr-10 relative">
          <div className="flex flex-col gap-5">
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
            <p className="test-name">Bismuth, Blood</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
