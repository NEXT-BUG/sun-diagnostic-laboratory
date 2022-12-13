import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { data } from "../../mock/tests";
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
        return word?.testName[0] === searchQuery;
      })
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <div className="w-2/3 mx-auto relative mb-32 top-20 bg-white h-1 rounded-lg" />
      <div className="flex flex-col md:flex-row md:items-start justify-center">
        <SearchCatalog shadow className="md:w-1/4" />
        <div
          ref={catalogRef}
          className="md:ml-auto w-2/3 mx-auto py-10 md:mr-10 relative"
        >
          <div className="flex flex-col gap-5">
            {searchQuery ? (
              filteredData?.length != 0 ? (
                filteredData?.map((item) => {
                  return (
                    <p
                      onClick={() => router.push(`/book/${item.testId}`)}
                      className="test-name"
                    >
                      {item.testName}
                    </p>
                  );
                })
              ) : (
                <div className="flex justify-center items-center">
                  <p className="font-bold text-xl text-red-500">
                    No Results Found!
                  </p>
                </div>
              )
            ) : (
              data?.map((item) => {
                return (
                  <p
                    onClick={() => router.push(`/book/${item.testId}`)}
                    className="test-name"
                  >
                    {item.testName}
                  </p>
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
