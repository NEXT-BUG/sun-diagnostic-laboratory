import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useEffect } from "react";
import Catalog from "../components/profiles/Catalog";
import Hero from "../components/tests/Hero";

const Profiles = () => {
  const router = useRouter();
  const catalogRef = useRef(null);
  const searchQuery = router.query.search;

  useEffect(() => {
    if (searchQuery) {
      catalogRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen w-screen">
      <Hero
        title="Health Profiles"
        catalogRef={catalogRef}
        description="Our Health Profiles diagnostic Services help you to identify what it is about your life that needs to be changed. This is done by using a very specific process and by following a very structured methodology."
      />

      <Catalog searchQuery={searchQuery} catalogRef={catalogRef} />
    </div>
  );
};

export default Profiles;
