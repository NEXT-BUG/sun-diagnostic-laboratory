import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useEffect } from "react";
import Catalog from "../components/tests/Catalog";
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
      <Hero />

      <Catalog searchQuery={searchQuery} catalogRef={catalogRef} profile />
    </div>
  );
};

export default Profiles;
