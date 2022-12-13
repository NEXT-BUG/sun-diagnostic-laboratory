import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchCatalog from "../../components/tests/SearchCatalog";
import { data } from "../../mock/tests";

const Booking = () => {
  const router = useRouter();
  const { testId } = router.query;
  const [testObject, setTestObject] = useState({});
  useEffect(() => {
    if (testId) {
      const test = data.find((item) => item.testId === testId);
      setTestObject(test);
    }
  }, [testId]);
  return (
    <div className="w-screen min-h-screen">
      <div className="p-10 flex justify-between font-ubuntu space-x-10">
        <SearchCatalog border shadow className="md:w-1/3" />
        <div className="text-left w-2/3">
          <p className="font-bold text-4xl">{testObject.testName}</p>
          <div className="mt-32">
            <h1 className="font-bold text-2xl">Book Now</h1>
            <div className="bg-primary h-1 w-full my-5 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
