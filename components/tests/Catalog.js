import { useRouter } from "next/router";
import React from "react";
import { data } from "../../mock/tests";
import SearchCatalog from "./SearchCatalog";

const Catalog = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <div className="w-2/3 mx-auto relative mb-32 top-20 bg-white h-1 rounded-lg" />
      <div className="flex flex-col md:flex-row md:items-start justify-center">
        <SearchCatalog shadow className="md:w-1/4" />
        <div className="md:ml-auto w-2/3 mx-auto my-10 md:mr-10 relative">
          <div className="flex flex-col gap-5">
            {data?.map((item) => {
              return (
                <p
                  onClick={() => router.push(`/book/${item.testId}`)}
                  className="test-name"
                >
                  {item.testName}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
