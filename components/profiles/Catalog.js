import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { data } from "../../mock/profiles";
import SearchCatalog from "./SearchCatalog";

const Catalog = ({ catalogRef, searchQuery }) => {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState(null);
  useEffect(() => {
    if (searchQuery == "ALL") {
      setFilteredData(data);
      return;
    }
    setFilteredData(
      data.filter((word) => {
        return word?.profileName[0] === searchQuery;
      })
    );
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery == "ALL") {
      setFilteredData(data);
      return;
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen relative w-screen text-white">
      <div className="absolute bg-gradient-to-b -z-50 from-primary to-black w-screen h-full" />
      <div className="w-2/3 mx-auto relative mb-32 top-20 bg-white h-1 rounded-lg" />
      <div className="flex flex-col md:flex-row md:items-start">
        <SearchCatalog shadow className=" md:w-1/4 m-10" />
        <div
          ref={catalogRef}
          className="md:ml-auto w-2/3 mx-auto py-10 md:mr-10 relative"
        >
          <div className="flex flex-col h-[30rem] overflow-y-auto gap-5">
            {searchQuery ? (
              filteredData?.length != 0 ? (
                filteredData?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => router.push(`/book/${item.profileId}`)}
                      className="test-name p-5"
                    >
                      <p>{item.profileName}</p>
                      <p className="text-sm mt-1 text-gray-400">{item.desc}</p>

                      <button className="mt-3 px-4 py-2 rounded-sm text-white md:hover:bg-[#005751] md:hover:scale-105 md:active:scale-75 ease-out duration-150 bg-primary ">
                        Book Now
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="flex justify-center items-center">
                  <p className="font-bold text-xl text-white px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-red-800 animate-pulse">
                    No Results Found!
                  </p>
                </div>
              )
            ) : (
              data?.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => router.push(`/book/${item.profileId}`)}
                    className="test-name space-y-4 p-5"
                  >
                    <p>{item.profileName}</p>
                    <p className="text-sm mt-1 text-gray-400">{item.desc}</p>
                    <button className="px-4 py-2 rounded-sm text-white md:hover:bg-[#005751] md:hover:scale-105 md:active:scale-75 ease-out duration-150 bg-primary">
                      Book Now
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
